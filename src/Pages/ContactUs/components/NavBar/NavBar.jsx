import React, { useState } from "react";
import "./NavBar.css";
import logo from "/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="NavContainer" id="home">
      <img
        title="Whitstack Solutions"
        src={logo}
        alt="Whitstack solutions Logo"
        loading="lazy"
        width="auto"
        height="auto"
      />

      <div className={`menu ${menu ? "active" : null}`}>
        <a href="/">Home</a>

        {/* Dropdown Container */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setDropdown(true)}
          // onMouseLeave={() => szetDropdown(false)}
        >
          <p style={{ cursor: "pointer" }}>Our Services</p>

          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${dropdown ? "active" : ""}`}>
            <a href="/service1">Web Development</a>
            <a href="/service2">Cloud Consulting Services</a>
            <a href="/service3">AI/ML Services</a>
            <a href="/service4">IT Staffing Services</a>
            <a href="/service5">IT Hardware Resell</a>
          </div>
        </div>

        <a href="/contactus">Contact</a>
      </div>

      <div className="Buttons">
        <button id="login">Log in</button>
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
