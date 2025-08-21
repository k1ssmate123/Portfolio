import React from "react";
import "./Contact.css";
import { Slide } from "react-awesome-reveal";
import { useLanguage } from "../../Hooks/languageContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Contact() {
  const { language, translations } = useLanguage();
  return (
    <Slide triggerOnce>
      <section id="contact">
        <h1>{translations[language].contact}</h1>
        <div className="contact_container">
          <a href="mailto:kissmate001@gmail.com">
            <button>{translations[language].email}</button>
          </a>

          <h4>{translations[language].reachOut}</h4>
          <div className="contact_icons">
            <a
              href="https://github.com/k1ssmate123"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.reddit.com/user/mate20066"
              target="_blank"
              rel="noreferrer"
              className="reddit"
            >
              <RedditIcon />
            </a>
            <a
              href="https://linkedin.com/in/kiss-máté-79b898208"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </Slide>
  );
}

export default Contact;
