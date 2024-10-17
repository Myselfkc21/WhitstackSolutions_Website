import React from "react";
import "./ms.css";
const MainSection = () => {
  return (
    <div className="C">
      <div className="image">
        {/* <img src="./mainSection.png" alt="" /> */}
      </div>
      <div className="text">
        <h2>
          Focus On Your Core Business And Leave The Problem Solving To Whitstack
          Expets <br /> IT consulting, Software development, Cloud migrations
          and Staffing solutions
        </h2>
        <p>
          Our experts are highly professional and can efficiently update legacy
          systems, manage cloud migrations, provide solutions for cloud
          architecture <br /> Our IT recruiters are ready to understand your
          needs and can find the best match to fit your company needs, whether
          you need a part time or full-time resource.
        </p>

        <button onClick={() => (window.location.href = "/contactus")}>
          TALK TO US
        </button>
      </div>
    </div>
  );
};

export default MainSection;
