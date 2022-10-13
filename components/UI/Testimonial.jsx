import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Experience" />
            <h4 className="mt-4 mb-5">Professional Background</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <div>
                    <h6> Rizort Technologies</h6>
                    <h6>Senior Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Requirement gathering, design and solutioning of a Slack
                  Chatbot |SaaS admin portal for a slack/email-based interface,
                  to make onboarding rewards and recognitions easier for an
                  organisation.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <div>
                    <h6>Rizort</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Dynamic web and app landing experiences | Improved SEO of the
                  website in integration with Google Analytics | Updated and
                  added new UI/UX on frontend web application | Updated and
                  developed a new landing page for the website | Designed a
                  styling library “Sigma” by implementing design components
                  using styled-components and TailwindCSS for use inside the
                  entire ecosystem of the application
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <div>
                    <h6>Mountblue Technologies</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
                <p>
                  Deployed in BigPesa and Rizort where I worked in different
                  visual performance aspects of the website.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
