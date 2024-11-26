import React from "react";
import "./MainSection.css";
const MainSection = () => {
  return (
    <div className="Container" id="">
      <div className="image">
        <div className="square"></div>
        <div className="circle"></div>
        <img
          title=" a person working/thinking"
          id="personImage"
          src="/image3.png"
          alt="an image of a person working/thinking"
          loading="lazy"
          width="auto"
          height="auto"
        />
      </div>

      <div className="texts">
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

        <button onClick={() => (window.location.href = "/contact-us")}>
          TALK TO US
        </button>
      </div>
    </div>
  );
};

export default MainSection;
