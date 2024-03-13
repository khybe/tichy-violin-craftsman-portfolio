import React from "react";

import logoImg from "../../../Assets/logo.png"; // Importing logo image
import czechFlagImg from "../../../Assets/czech-flag.png"; // Importing Czech Republic flag image
import americanFlagImg from "../../../Assets/american-flag.png"; // Importing American flag image
import spanishFlagImg from "../../../Assets/spanish-flag.png"; // Importing Spanish flag image
import frenchFlagImg from "../../../Assets/france-flag.png"; // Importing French flag image

import "./UpperHeader.css";

const UpperHeader = () => {
  // Declaring UpperHeader functional component
  return (
    <div className="header-upper">
      <div className="logo-container">
        {" "}
        {/* Opening div with className logo-container */}
        <div className="logo-title">
          {" "}
          {/* Opening div with className logo-title */}
          <h2>ROBERT TICHÝ</h2> {/* Rendering h2 element */}
          <h3>HOUSLAŘ</h3> {/* Rendering h3 element */}
        </div>
        <hr /> {/* Rendering horizontal rule */}
        <div className="logo-image">
          {" "}
          {/* Opening div with className logo-image */}
          <img src={logoImg} alt="Logo" />{" "}
          {/* Rendering image with src and alt attributes */}
        </div>
      </div>
      <div className="languages">
        {" "}
        {/* Opening div with className languages */}
        <ul>
          {" "}
          {/* Opening unordered list */}
          <li>
            <img src={czechFlagImg} alt="Czech Republic Flag" />{" "}
            {/* Rendering image with src and alt attributes */}
          </li>
          <li>
            <img src={americanFlagImg} alt="American Flag" />{" "}
            {/* Rendering image with src and alt attributes */}
          </li>
          <li>
            <img src={spanishFlagImg} alt="Spanish Flag" />{" "}
            {/* Rendering image with src and alt attributes */}
          </li>
          <li>
            <img src={frenchFlagImg} alt="French Flag" />{" "}
            {/* Rendering image with src and alt attributes */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpperHeader; // Exporting UpperHeader component
