import React from "react";
import { useLanguage } from "../../Hooks/languageContext";
import { Slide } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import "./Toolbox.css";
function Toolbox() {
  const { language, translations } = useLanguage();

  const frontendImgs = [
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "JS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "React",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    },
    {
      name: "React-Bootstrap",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    },
    {
      name: "PHP",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg",
    },
  ];

  const backendImgs = [
    {
      name: "C#",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: ".NET Core",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Python",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    },
  ];

  const toolsImgs = [
    {
      name: "Git",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    },
    {
      name: "Github",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    },
    {
      name: "Linux",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "Windows",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
    },
    {
      name: "MySQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "MSSQL sr",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
    },
    {
      name: "Scikit-learn",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
  ];

  return (
    <Slide triggerOnce>
      <section id="toolbox">
        <h1>{translations[language].toolbox}</h1>
        <Container className="toolbox_container">
          <Row>
            <Col xs={12} md={4}>
              <h2 className="toolbox_Title">Frontend</h2>
              <div className="toolbox_imgContainer">
                {frontendImgs.map((lang) => (
                  <img
                    src={lang.link}
                    alt={lang.name}
                    className="toolbox_img"
                  />
                ))}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <h2 className="toolbox_Title">Backend</h2>
              <div className="toolbox_imgContainer">
                {backendImgs.map((lang) => (
                  <img
                    src={lang.link}
                    alt={lang.name}
                    className="toolbox_img"
                  />
                ))}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <h2 className="toolbox_Title">{translations[language].others}</h2>

              <div className="toolbox_imgContainer">
                {toolsImgs.map((lang) => (
                  <img
                    src={lang.link}
                    alt={lang.name}
                    className="toolbox_img"
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Slide>
  );
}

export default Toolbox;
