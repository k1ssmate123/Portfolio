import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLanguage } from "../../Hooks/languageContext";

function ProjectCard({ title, description, codelink, picture, language }) {
  const { language: siteLanguage, translations } = useLanguage();

  return (
    <Row className="g-0 p-2 align-items-stretch">
      <Col md={6} sm={8}>
        <div className="projectcard_container">
          <div className="projectcard_content">
            <h2>{title}</h2>
            <p>{description}</p>
            <Badge className="projectcard_badge" bg="primary">
              {language}
            </Badge>
          </div>
          <a href={codelink} target="_blank" rel="noreferrer">
            <button className="projectcard_button">
              {translations[siteLanguage].srcCodeBtn} <GitHubIcon />
            </button>
          </a>
        </div>
      </Col>
      <Col md={6} sm={4}>
        <Image
          src={picture}
          fluid
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Col>
    </Row>
  );
}

export default ProjectCard;
