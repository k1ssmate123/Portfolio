import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Header from "./Components/Header/Header";
import MainContent from "./Components/Welcome/MainContent";
import Projects from "./Components/Projects/Projects";
import { LanguageProvider } from "./Hooks/languageContext";
import { motion, useScroll } from "framer-motion";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLigthMode = () => {
    setLightMode((prev) => {
      return !prev;
    });
  };

  const { scrollYProgress } = useScroll();

  return (
    <LanguageProvider>
      <div className="App" data-theme={lightMode ? "light" : ""}>
        <Header lightMode={lightMode} toggleLigthMode={toggleLigthMode} />

        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: "var(--navbar-border)",
            backgroundSize: "200% 100%",
            backgroundPositionX: scrollYProgress,
            zIndex: 9999,
          }}
        />

        <MainContent />
        <div className="page-break"></div>
        <AboutMe />
        <div className="page-break"></div>
        <Projects />
      </div>
    </LanguageProvider>
  );
}

export default App;
