import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLanguage } from "../../Hooks/languageContext";
import { Slide } from "react-awesome-reveal";

function AboutMe() {
  const { language, translations } = useLanguage();
  return (
    <Slide>
      <section id="about" className="about_container">
        <h1> {translations[language].about}</h1>
        <Container>
          <Row>
            <Col sm={8}>
              <p className="about_description">
                {translations[language].aboutMe}
              </p>
            </Col>
            <Col sm={4}>Példa2</Col>
          </Row>
        </Container>
      </section>
    </Slide>
  );
}

export default AboutMe;
