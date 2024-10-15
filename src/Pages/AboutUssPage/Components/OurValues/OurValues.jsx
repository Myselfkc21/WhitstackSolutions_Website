import React from "react";
import "./OurValues.css";
import { BsTransparency } from "react-icons/bs";
const OurValues = () => {
  return (
    <div className="OurValues">
      <div className="OurValuesText">
        <h2>Our Values</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim veniam
          molestias possimus. Harum sunt recusandae laudantium exercitationem
          molestiae itaque unde incidunt autem ex culpa, dignissimos ea maxime,
          suscipit, possimus accusamus!
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
