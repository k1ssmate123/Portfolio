import hun from "../../Images/hun.png";
import eng from "../../Images/eng.png";
import { useLanguage } from "../../Hooks/languageContext";

function LanguageIcon() {
  const { language } = useLanguage();

  const langImg = language === "en" ? eng : hun;

  return <img src={langImg} alt={language} className="header-lang" />;
}

export default LanguageIcon;
