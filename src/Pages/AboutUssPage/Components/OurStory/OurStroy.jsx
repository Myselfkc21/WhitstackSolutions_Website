import React from "react";
import "./OurStory.css"; // Assuming your CSS is in this file

const OurStory = () => {
  return (
    <div className="OurStoryContainer">
      <div className="OurStoryImages">
        <img
          src="https://images.unsplash.com/photo-1664222845171-f9ffe4579c1f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="ourStoryText">
        <h1>Our Story</h1>
        <p>
          Our Story we started with a simple belief that technology should
          enable growth, not create barriers. With this vision, we began our
          journey, helping organizations transform their operations through
          smart, scalable, and secure IT solutions.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
