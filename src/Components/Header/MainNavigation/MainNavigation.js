import React, { useState } from "react"; // Importing React library and useState hook
import { NavLink } from "react-router-dom"; // Importing NavLink component from react-router-dom

import "./MainNavigation.css";

const Navbar = () => {
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
      {" "}
      {/* Opening nav element with className main-navigation */}
      <ul className={showMobileMenu ? "mobile-menu" : ""}>
        {" "}
        {/* Opening ul element with conditional className */}
        <li onClick={closeMobileMenuHandler}>
          {" "}
          {/* List item to close mobile menu when clicked */}
          <NavLink
            to="/"
            className={(
              navData // NavLink to home with conditional className
            ) => (navData.isActive ? "active-style" : "none")}
            exact
          >
            ÚVOD
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          {" "}
          {/* List item to close mobile menu when clicked */}
          <NavLink
            to="/housle"
            className={(
              navData // NavLink to housle with conditional className
            ) => (navData.isActive ? "active-style" : "none")}
          >
            Housle
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          {" "}
          {/* List item to close mobile menu when clicked */}
          <NavLink
            to="/viola"
            className={(
              navData // NavLink to viola with conditional className
            ) => (navData.isActive ? "active-style" : "none")}
          >
            Viola
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          {" "}
          {/* List item to close mobile menu when clicked */}
          <NavLink
            to="/violoncello"
            className={(
              navData // NavLink to violoncello with conditional className
            ) => (navData.isActive ? "active-style" : "none")}
          >
            Violoncello
          </NavLink>
        </li>
        <li onClick={closeMobileMenuHandler}>
          {" "}
          {/* List item to close mobile menu when clicked */}
          <NavLink
            to="/violadagamba"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            Voila Da Gamba
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
    </nav>
  );
};

export default Navbar; // Exporting Navbar component
