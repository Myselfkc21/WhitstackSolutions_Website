import React, { useState } from "react";
import "./NavBar.css";
import logo from '/logo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="NavContainer" id="home">
      <img title="Whitstack Solutions" src={logo} alt="Whitstack solutions Logo" loading="lazy" width="auto" height="auto" />

      <div className={`menu ${menu ? "active" : null}`}>
        <a href="/">Home</a>
        <a href="/#ourservices">Our Services</a>
        <a href="/contactus">Contact</a>
      </div>

      <div className="Buttons">
        {/* <button id="login">og In</button> */}
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
