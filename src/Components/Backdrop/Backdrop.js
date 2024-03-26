import React from "react";
import "./Backdrop.css";

// Component for rendering a backdrop, typically used for closing modal or mobile menu
const Backdrop = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;
