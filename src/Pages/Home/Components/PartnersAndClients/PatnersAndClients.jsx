import React from "react";
import "./PartnersAndClients.css";

const PatnersAndClients = () => {
  return (
    <div className="PartnersContainer">
      <div className="TextAbtPartners">
        <h3>
          We Work With the <br />
          Best Partners
        </h3>
        <p>
          While we are at the forefront of brand specialize in design-build, we
          are very familiar with a number of delivery methods and are confident
          we can find the process that will best help you meet your goals.
        </p>
        <button>Learn More</button>
      </div>
      <div className="PartnerLogo">
        <a href="https://redingtongroup.com/">
          <img
            width="300px"
            height="auto"
            loading="lazy"
            title="redington"
            src="/redington.png"
            alt="redington logo"
          />
        </a>
        <a href="https://pidatacenters.com/">
          <img
            width="200px"
            height="auto"
            loading="lazy"
            title="pi"
            id="pi"
            src="/pi.png"
            alt="pi data center logo"
          />
        </a>
        <a href="https://www.rivermeadow.com/">
          <img
            width="250px"
            height="auto"
            loading="lazy"
            title="crayon"
            src="https://www.rivermeadow.com/hubfs/RiverMeadow%20logo%202022%20LOP/final%20RiverMeadow%20LOP%20full%20colour%20outline.svg"
            alt="rivermeadow logo"
          />
        </a>
        <a href="https://www.crayon.com/">
          <img
            width="300px"
            height="auto"
            loading="lazy"
            title="crayon"
            src="/crayon.png"
            alt="crayon logo"
          />
        </a>
        <a href="https://www.aws.com/">
          <img
            width="300px"
            height="auto"
            loading="lazy"
            title="crayon"
            src="/AWS Logo.png"
            alt="aws logo"
          />
        </a>
      </div>
    </div>
  );
};

export default PatnersAndClients;
