import React from "react";

import UpperHeader from "./UpperHeader/UpperHeader"; // Importing UpperHeader component
import Navbar from "./Navbar/Navbar"; // Importing MainNavigation component
import "./Header.css";

// Component for the header section including upper header and navigation bar
const Header = ({ onChangeLanguage, language }) => {
  return (
    <header>
      <UpperHeader changeLanguage={onChangeLanguage} language={language} />
      <Navbar language={language} />
    </header>
  );
};

export default Header;
