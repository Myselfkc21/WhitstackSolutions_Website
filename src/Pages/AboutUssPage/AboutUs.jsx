import React from "react";
import NavBar from "../Home/Components/NavBar/NavBar";
import OurStory from "./Components/OurStory/OurStroy.jsx";
import IntroPart from "./Components/IntroPart/IntroPart.jsx";
import "./AboutUs.css";
import OurValues from "./Components/OurValues/OurValues.jsx";
import FooterSection from "../Home/Components/Footers/FooterSection.jsx";
export const AboutUs = () => {
  return (
    <>
      <NavBar></NavBar>

      <div className="Abtus">
        <IntroPart></IntroPart>
        <OurStory></OurStory>
        <OurValues></OurValues>
      </div>
      <FooterSection></FooterSection>
    </>
  );
};
