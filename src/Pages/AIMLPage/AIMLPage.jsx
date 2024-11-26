import React from "react";
import "./AIMLPage.css";
import { Helmet } from "react-helmet";
import NavBar from "../Home/Components/NavBar/NavBar";

import FooterSection from "./Components/Footers/FooterSection";
import TextPortion from "./Components/TextPortion/TextPortion";
const AIMLPage = () => {
  return (
    <>
      <Helmet>
        <title>AI & Machine Learning Services | Whitstack Solutions</title>
        <meta
          name="description"
          content="Leverage cutting-edge AI and Machine Learning solutions at Whitstack Solutions. Transform your business with intelligent automation and data-driven insights."
        />
        <link rel="canonical" href="/ai-ml-services" />
      </Helmet>
      <div>
        <NavBar />
        <div className="HEADS"></div>
        <TextPortion />
        <FooterSection />
      </div>
    </>
  );
};

export default AIMLPage;
