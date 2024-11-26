import React from "react";
import "./FooterSection.css";
import { FaTwitterSquare, FaWhatsapp } from "react-icons/fa";
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
            <div
              className="iconS"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/whitstacksolutions"
                )
              }
            >
              <FaLinkedin />
            </div>
            <div className="iconS">
              <FaInstagram />
            </div>
            <div
              className="iconS"
              onClick={() => window.open("https://wa.me/7330639555")}
            >
              <FaWhatsapp />
            </div>
            <div className="iconS">
              <FaTwitterSquare />
            </div>
          </div>
        </div>

        <div className="footerMenu">
          <a href="/">Home</a>
          <a href="/#ourservices">Our Services</a>
          <a href="/contact-us">Contact</a>
        </div>
      </div>

      <p>©2024 Whitestack Solutions. All rights reserved</p>
    </div>
  );
};

export default FooterSection;
