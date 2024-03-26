import React from "react";
import "./Footer.css";
import footerData from "../../Data/footerData";

// Component for displaying the footer section including contact information and copyright details
const Footer = ({ language }) => {
  const data = footerData[language];

  return (
    <footer className="footer">
      <div className="contact-container">
        <div className="contact-info">
          <label className="label">{data.email}:</label>
          <span className="detail">
            <a className="link" href="mailto:robert.tichy@post.cz">
              robert.tichy@post.cz
            </a>
          </span>
        </div>
        <div className="contact-info">
          <label className="label">{data.phone}:</label>
          <span className="detail">
            <a className="link" href="tel:+420 603378877">
              +420 603 378 877
            </a>
          </span>
        </div>
        <div className="contact-info">
          <label className="label">{data.locationLabel}:</label>
          <span className="detail">{data.location}</span>
        </div>
      </div>
      <div className="contribution-info">
        <label className="label">{data.createdBy}:</label>
        <span className="detail">
          <a
            className="link"
            href="https://khaibarsaadat.com/"
            target="_blank"
            rel="noreferrer"
          >
            Khaibar Saadat
          </a>
        </span>
      </div>
      <div className="copyright">
        <span>
          &copy; {data.year} {data.website}. {data.rightsReserved}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
