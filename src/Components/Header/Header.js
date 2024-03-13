import React from "react";

import UpperHeader from "./UpperHeader/UpperHeader"; // Importing UpperHeader component
import MainNavigation from "./MainNavigation/MainNavigation"; // Importing MainNavigation component
import "./Header.css";

const Header = () => {
  return (
    <header>
      <UpperHeader /> {/* Rendering UpperHeader component */}
      <MainNavigation /> {/* Rendering MainNavigation component */}
    </header>
  );
};

export default Header;
