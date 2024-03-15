import React from "react";

import UpperHeader from "./UpperHeader/UpperHeader"; // Importing UpperHeader component
import MainNavigation from "./Navbar/Navbar"; // Importing MainNavigation component
import "./Header.css";

const Header = ({ onChangeLanguage, language }) => {
  return (
    <header>
      <UpperHeader changeLanguage={onChangeLanguage} language={language} />
      <MainNavigation language={language} />
    </header>
  );
};

export default Header;
