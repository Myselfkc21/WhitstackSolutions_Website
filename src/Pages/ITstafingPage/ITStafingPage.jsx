import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Home/Components/NavBar/NavBar";

import FooterSection from "../WebDevPage/Components/Footers/FooterSection";
import "./ITStafingPage.css";
import TextSection from "./Components/Textsection/TextSection";
const ITStafingPage = () => {
  return (
    <>
      <Helmet>
        <title>IT Staffing Services | Whitstack Solutions</title>
        <meta
          name="description"
          content="Discover exceptional IT staffing services at Whitstack Solutions. We connect businesses with top tech talent to drive innovation and success."
        />
        <link rel="canonical" href="/it-staffing-services" />
      </Helmet>
      <div>
        <NavBar />
        <div className="head"></div>
        <TextSection />
        <FooterSection />
      </div>
    </>
  );
};

export default ITStafingPage;
