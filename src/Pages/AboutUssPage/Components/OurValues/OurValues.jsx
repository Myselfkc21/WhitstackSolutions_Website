import React from "react";
import "./OurValues.css";
import { BsTransparency } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaMagic } from "react-icons/fa";
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
              <FaMagic />
            </div>
            <h3>Innovation</h3>
          </div>
          <div className="PointBody">
            <p>
              Technology evolves rapidly, and we strive to stay ahead of the
              curve to help our clients adapt and thrive.
            </p>
          </div>
        </div>
        <div className="Point">
          <div className="PointHead">
            <div className="icon">
              <IoPersonSharp />
            </div>
            <h3>Client</h3>
          </div>
          <div className="PointBody">
            <p>
              We listen, collaborate, and customize solutions to ensure their
              success, building lasting partnerships based on trust and value.
            </p>
          </div>
        </div>
        <div className="Point">
          <div className="PointHead">
            <div className="icon">
              <BsTransparency></BsTransparency>
            </div>
            <h3>Integrity and Transparency</h3>
          </div>
          <div className="PointBody">
            <p>
              We believe in doing the right thing, always. Honesty,
              accountability, and open communication are the foundations of our
              relationships with clients, partners, and colleagues.
            </p>
          </div>
        </div>
        <div className="Point">
          <div className="PointHead">
            <div className="icon">
              <RiTeamFill />
            </div>
            <h3>Collaboration and Teamwork</h3>
          </div>
          <div className="PointBody">
            <p>
              We value the strength of diverse perspectives and skills. By
              working together—internally and with our clients—we achieve more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
