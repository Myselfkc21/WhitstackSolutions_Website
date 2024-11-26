import React from "react";
import "./OurValues.css";
import { BsTransparency } from "react-icons/bs";
const OurValues = () => {
  return (
    <div className="OurValues">
      <div className="OurValuesText">
        <h2>Our Values</h2>
        <p>
          We are committed to delivering exceptional value by putting our
          customers first, driving innovation to meet their evolving needs, and
          staying agile ,cost efficient and adaptable in a rapidly changing
          world.
        </p>
      </div>
      <div className="Points">
        <div className="Point">
          <div className="PointHead">
            <div className="icon">
              <BsTransparency></BsTransparency>
            </div>
            <h3>Default to Transparency</h3>
          </div>
          <div className="PointBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              tenetur fugiat rem error maxime quaerat sint aspernatur,
              necessitatibus quasi, ab dicta accusamus tempore? Eos eligendi rem
              ullam ratione, esse magni?
            </p>
          </div>
        </div>
        <div className="Point">
          <div className="PointHead">
            <div className="icon">
              <BsTransparency></BsTransparency>
            </div>
            <h3>Default to Transparency</h3>
          </div>
          <div className="PointBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              tenetur fugiat rem error maxime quaerat sint aspernatur,
              necessitatibus quasi, ab dicta accusamus tempore? Eos eligendi rem
              ullam ratione, esse magni?
            </p>
          </div>
        </div>
        <div className="Point">
          <div className="PointHead">
            <div className="icon">
              <BsTransparency></BsTransparency>
            </div>
            <h3>Default to Transparency</h3>
          </div>
          <div className="PointBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              tenetur fugiat rem error maxime quaerat sint aspernatur,
              necessitatibus quasi, ab dicta accusamus tempore? Eos eligendi rem
              ullam ratione, esse magni?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
