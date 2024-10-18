import React from "react";
import "./AIMLPage.css";
import { Helmet } from "react-helmet";
import NavBar from "../Home/Components/NavBar/NavBar";
import HeadPart from "../WebDevPage/Components/HeadPart/HeadPart";
import FooterSection from "./Components/Footers/FooterSection";
import TextPortion from "./Components/TextPortion/TextPortion";
const AIMLPage = () => {
  return (
    <>
      <Helmet>
        <title>Services Provided</title>
        <meta name="description" content="Services Provided" />
        <link rel="canonical" href="/service3" />
      </Helmet>
      <div>
        <NavBar />
        <div className="HEADS">
          <HeadPart />
        </div>
        <TextPortion />
        <FooterSection />
      </div>
    </>
  );
};

export default AIMLPage;
