import React from "react";

import logoImg from "../../../Assets/images/logo.png"; // Importing logo image
import czechFlagImg from "../../../Assets/images/czech-flag.png"; // Importing Czech Republic flag image
import britishFlagImg from "../../../Assets/images/british-flag.jpg"; // Importing American flag image
import spanishFlagImg from "../../../Assets/images/spanish-flag.png"; // Importing Spanish flag image
import frenchFlagImg from "../../../Assets/images/france-flag.png"; // Importing French flag image
import headerData from "../../../Data/headerData";

import "./UpperHeader.css";

const UpperHeader = ({ changeLanguage, language }) => {
  const { name, title } = headerData[language];

  return (
    <div className="header-upper">
      <div className="logo-container">
        <div className="logo-title">
          <h2>{name}</h2> {/* Rendering h2 element */}
          <h3>{title}</h3> {/* Rendering h3 element */}
        </div>
        <hr /> {/* Rendering horizontal rule */}
        <div className="logo-image">
          <img src={logoImg} alt="Logo" />{" "}
          {/* Rendering image with src and alt attributes */}
        </div>
      </div>
      <div className="languages">
        {/* Opening div with className languages */}
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

export default UpperHeader; // Exporting UpperHeader component
