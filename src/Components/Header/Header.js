import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import ToggleButton from "@mui/material/ToggleButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useLanguage } from "../../Hooks/languageContext";
import LanguageIcon from "./LanguageIcon";

function Header({ lightMode, toggleLigthMode }) {
  const isLightModeOn = () => {
    return lightMode ? <LightModeIcon /> : <NightlightIcon />;
  };

  const { language, toggleLanguage, translations } = useLanguage();
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary header_navbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="header-brand" href="#">
          <span className="header-brand">Kiss Máté</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav ms-auto" />
        <ToggleButton
          value="check"
          selected={lightMode}
          onChange={() => toggleLigthMode()}
        >
          {isLightModeOn()}
        </ToggleButton>

        <ToggleButton
          value="check"
          selected={language}
          onChange={toggleLanguage}
        >
          <LanguageIcon />
        </ToggleButton>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">{translations[language].about}</Nav.Link>
            <Nav.Link href="#projects">
              {translations[language].projects}
            </Nav.Link>
            <Nav.Link href="#toolbox">
              {translations[language].toolbox}
            </Nav.Link>
            <Nav.Link href="#contact">
              {translations[language].contact}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
