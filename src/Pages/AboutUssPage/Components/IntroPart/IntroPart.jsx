import React from "react";
import "./IntroPart.css";
const IntroPart = () => {
  return (
    <div className="IntroPart" style={{ paddingTop: "0" }}>
      <div className="IntroText">
        <h1>
          Hola! <br /> We are Whitstack
        </h1>
        <p>
          We are Cloud services company dedicated to run business through
          secure, scalable and innovative cloud solutions. We have expertise in
          Cloud deployments, infrastructure, AI/ML and IT staffing. we partner
          with organizations to streamline operations, enhance agility, and
          drive digital transformation. Our team of skilled professionals brings
          together deep technical knowledge and a customer-centric approach to
          deliver reliable, custom-fit solutions that adapt as our clients’
          needs evolve.
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
