import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem
                  title="Frontend Development"
                  icon="ri-apps-line"
                />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>Skills</p>
            <p>
              HTML5, CSS3, jQuery, vanilla Javascript, Typescript, ES6, ReactJS,
              ReduxJS, React Hooks, NodeJS, Ex- pressJS, Babel, Webpack, NextJS,
              SSR, Mocha, Chai, Cypress, Jasmine, SQL, MySQL, Mongo, CircleCI,
              Redis, Papertrail, Nginx, Python, GIT, Jira,VSD, Atom, Sublime,
              XML/JSON, REST APIs, Agile Scrum, Figma,React Native, Expo
            </p>
            <p>Libraries</p>{" "}
            <p>
              {" "}
              Lodash, Underscore JS, Jquery, D3, Chart JS, Moment JS, Tailwind
              CSS
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
