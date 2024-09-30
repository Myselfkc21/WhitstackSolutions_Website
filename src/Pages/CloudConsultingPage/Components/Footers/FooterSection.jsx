import React from "react";
import "./FooterSection.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const FooterSection = () => {
  return (
    <div className="FooterCont">
      <div className="top">
        <div className="Socials">
          <h3>Whitstack Solutions</h3>
          <div className="Social">
            <div className="iconS">
              <FaLinkedin />
            </div>
            <div className="iconS">
            <FaInstagram />
            </div>
            <div className="iconS">
            <FaFacebookSquare />
            </div>
            <div className="iconS">
            <FaTwitterSquare />
            </div>
          </div>
        </div>

        <div className="footerMenu">
          <a href="/">Home</a>
          <a href="/#ourservices">Our Services</a>
          <a href="/contactus">Contact</a>
        </div>
      </div>

      <p>©2024 Whitestack Solutions. All rights reserved</p>
    </div>
  );
};

export default FooterSection;
