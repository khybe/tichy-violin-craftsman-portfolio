import React from "react";

import logoImg from "../../../Assets/images/logo.png";
import czechFlagImg from "../../../Assets/images/czech-flag.png";
import britishFlagImg from "../../../Assets/images/british-flag.jpg";
import spanishFlagImg from "../../../Assets/images/spanish-flag.png";
import frenchFlagImg from "../../../Assets/images/france-flag.png";
import headerData from "../../../Data/headerData";

import "./UpperHeader.css";

// Component for upper section of the header including logo and language selection
const UpperHeader = ({ changeLanguage, language }) => {
  const { name, title } = headerData[language];

  return (
    <div className="header-upper">
      <div className="logo-container">
        <div className="logo-title">
          <h2>{name}</h2>
          <h3>{title}</h3>
        </div>
        <hr />
        <div className="logo-image">
          <img src={logoImg} alt="Logo" />
        </div>
      </div>
      <div className="languages">
        <ul>
          <li onClick={() => changeLanguage("czech")}>
            <img
              className={language === "czech" ? "active" : ""}
              src={czechFlagImg}
              alt="Czech Republic Flag"
            />
          </li>
          <li onClick={() => changeLanguage("english")}>
            <img
              className={language === "english" ? "active" : ""}
              src={britishFlagImg}
              alt="British Flag"
            />
          </li>
          <li onClick={() => changeLanguage("spanish")}>
            <img
              className={language === "spanish" ? "active" : ""}
              src={spanishFlagImg}
              alt="Spanish Flag"
            />
          </li>
          <li onClick={() => changeLanguage("french")}>
            <img
              className={language === "french" ? "active" : ""}
              src={frenchFlagImg}
              alt="French Flag"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpperHeader;
