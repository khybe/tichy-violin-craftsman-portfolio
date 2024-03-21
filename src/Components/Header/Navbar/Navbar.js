import React, { useState } from "react"; // Importing React library and useState hook
import { NavLink } from "react-router-dom"; // Importing NavLink component from react-router-dom

import Backdrop from "../../Backdrop/Backdrop";
import headerData from "../../../Data/headerData";

import "./Navbar.css";

const Navbar = ({ language }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false); // Declaring state variable to manage mobile menu visibility

  // Function to toggle mobile menu visibility
  const toggleMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Function to close mobile menu
  const closeMobileMenuHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="main-navigation">
      <ul className={showMobileMenu ? "mobile-menu" : ""}>
        <li onClick={closeMobileMenuHandler}>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            {headerData[language].navLinks[0]}
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          <NavLink
            to="/housle"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            {headerData[language].navLinks[1]}
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          <NavLink
            to="/viola"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            {headerData[language].navLinks[2]}
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          <NavLink
            to="/violoncello"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            {headerData[language].navLinks[3]}
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          <NavLink
            to="/violadagamba"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            {headerData[language].navLinks[4]}
          </NavLink>
        </li>
      </ul>
      <div
        className={`mobile-toggle-btn ${showMobileMenu ? "open" : ""}`} // Div for mobile menu toggle button with conditional className
        onClick={toggleMobileMenuHandler} // Click handler for toggling mobile menu
      >
        <div className="bar"></div> {/* Div for bar 1 */}
        <div className="bar"></div> {/* Div for bar 2 */}
        <div className="bar"></div> {/* Div for bar 3 */}
      </div>
      {showMobileMenu && <Backdrop onClick={closeMobileMenuHandler} />}
    </nav>
  );
};

export default Navbar; // Exporting Navbar component
