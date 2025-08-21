import React from "react";
import "./MainContent.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLanguage } from "../../Hooks/languageContext";
import { Slide } from "react-awesome-reveal";
function MainContent() {
  const { language, translations } = useLanguage();
  return (
    <Slide triggerOnce>
      <section className="main_container page">
        {translations[language].introduction}
        <h2 id="name">Kiss Máté</h2>
        <a
          href="https://github.com/k1ssmate123"
          rel="noreferrer"
          target="_blank"
          className="main_button"
        >
          <GitHubIcon /> {translations[language].githubBtn}
        </a>
      </section>
    </Slide>
  );
}

export default MainContent;
