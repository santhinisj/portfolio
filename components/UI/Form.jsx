import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    sendMail();
  };

  function sendMail(name, email, subject, message) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set(
      "Authorization",
      "Basic " + base64.encode("df87fe4d035aa5a69a82ea2f010b5382" + ":" + "cf19077cfd0243e763bc13c27aa68425")
    );

    const data = JSON.stringify({
      Messages: [
        {
          From: { Email: "<YOUR EMAIL>", Name: "<YOUR NAME>" },
          To: [{ Email: email, Name: name }],
          Subject: subject,
          TextPart: message,
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
    };

    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
