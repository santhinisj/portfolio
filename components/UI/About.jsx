import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from "../../public/images/img-01.jpg";
import img02 from "../../public/images/img-02.jpg";
import img03 from "../../public/images/img-03.jpg";
import github from "../../public/images/github.png";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help you build your next project</h3>
            <div>
              <ul>
                <li>
                  <p>
                    {" "}
                    5+ years of hands-on coding experience in a startup
                    environment{" "}
                  </p>
                </li>
                <li>
                  <p>Based out of Downtown Toronto</p>
                </li>
                <li>
                  <p>Adept in performance enhancements on UI</p>
                </li>
                <li>
                  <p>
                    Success with end-to-end product development of single page
                    or multipage applications to deployment using AWS / Heroku
                    etc.
                  </p>
                </li>
                <li>
                  <p>
                    Bachelors in Technology | Masters in Technology | Post
                    Graduate Diploma in Web Development
                  </p>
                </li>
              </ul>
            </div>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Self Starter
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Team Player
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="https://www.linkedin.com/in/santhinisj/">My Linkedin</Link>
              </button>

              <button className="secondary__btn">
                <a
                  href="https://drive.google.com/file/d/1E8-9plkAXtdiVTey9nRnyA25fK5L6oj1/view?usp=sharing"
                  target="_blank"
                >
                  Download CV
                </a>
              </button>
            </div>
          </Col>

          <Col lg="6">
            {/* <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            > */}
            {/* <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div> */}

            <div className=" d-flex flex-column mb-3">
              {/* <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div> */}

              {/* <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                > */}
              <a href="https://github.com/santhinisj" target="_blank">
                <Image src={github} alt="about-img" />
              </a>
              {/* </div> */}
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
