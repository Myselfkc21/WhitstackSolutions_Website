import React, { useState } from "react";
import "./NavBar.css";
import logo from "/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownClick = () => {
    setDropdown(!dropdown); // Toggle the dropdown menu on click for mobile
  };

  return (
    <div className="NavContainer" id="home" style={{ margin: "0px" }}>
      <img
        title="Whitstack Solutions"
        src={logo}
        alt="Whitstack solutions Logo"
        loading="lazy"
        width="auto"
        height="auto"
      />

      <div className={`menu ${menu ? "active" : ""}`}>
        <a href="/">Home</a>

        {/* Dropdown Container */}
        <div
          className="dropdown-container"
          onClick={handleDropdownClick}
          style={{ cursor: "pointer" }}
        >
          <p
            style={{
              color: "black",
              cursor: "pointer",
            }}
          >
            Our Services
          </p>

          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${dropdown ? "active" : ""}`}>
            <a href="/Web-service-provider">Web Development</a>
            <a href="/cloud-computing-services">Cloud Consulting Services</a>
            <a href="/ai-ml-services">AI/ML Services</a>
            <a href="/it-staffing-services">IT Staffing Services</a>
            <a href="/it-hardware-reselling">IT Hardware Resell</a>
            <a href="/digital-marketing-services">Digital Marketing Services</a>
          </div>
        </div>

        <a href="/contact-us">Contact</a>
        <a href="/about-us">About Us</a>
      </div>

      <div className="Buttons">
        <button>Sign Up</button>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenu(!menu)}>
        {menu ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
    </div>
  );
};

export default NavBar;
