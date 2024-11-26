import React from "react";
import NavBar from "../Home/Components/NavBar/NavBar";
import OurStory from "./Components/OurStory/OurStroy.jsx";
import IntroPart from "./Components/IntroPart/IntroPart.jsx";
import "./AboutUs.css";
import OurValues from "./Components/OurValues/OurValues.jsx";
import FooterSection from "../Home/Components/Footers/FooterSection.jsx";
import { Helmet } from "react-helmet";
export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Whitstack Solutions</title>
        <meta
          name="description"
          content="Learn about Whitstack Solutions, your trusted partner in cloud computing, web development, IT staffing, AI/ML, and IT hardware reselling. Empowering businesses with innovative tech solutions."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>
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
