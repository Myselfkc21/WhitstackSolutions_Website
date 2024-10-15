import React from "react";
import "./IntroPart.css";
const IntroPart = () => {
  return (
    <div className="IntroPart">
      <div className="IntroText">
        <h1>
          Hola! <br /> We are Whitstack
        </h1>
        <p>
          {" "}
          We are a team of professional IT consultants and software development
          experts. We are ready to help you with your IT needs.{" "}
        </p>
      </div>

      <div className="IntroImage">
        <img
          src="https://images.unsplash.com/photo-1664222845171-f9ffe4579c1f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default IntroPart;
