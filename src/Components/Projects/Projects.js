import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/Container";
import images from "./Images";
import { useLanguage } from "../../Hooks/languageContext";
import { Slide } from "react-awesome-reveal";
function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/k1ssmate123/repos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const { language, translations } = useLanguage();

  return (
    <Slide triggerOnce>
      <section id="projects">
        <h1>{translations[language].projects}</h1>
        <Container>
          {data.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
              codelink={repo.html_url}
              language={repo.language}
              picture={images.filter((x) => x.includes(repo.name))}
            />
          ))}
        </Container>
      </section>
    </Slide>
  );
}
export default Projects;
