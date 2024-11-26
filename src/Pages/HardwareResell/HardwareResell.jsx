import React from "react";
import "./HardwareResell.css";
import TextPortion from "./Components/TextPortion/TextPortion";
import FooterSection from "../CloudConsultingPage/Components/Footers/FooterSection";
import NavBar from "../Home/Components/NavBar/NavBar";
import { Helmet } from "react-helmet";
const HardwareResell = () => {
  return (
    <>
      <Helmet>
        <title>IT Hardware Reselling | Whitstack Solutions</title>
        <meta
          name="description"
          content="Discover premium IT hardware reselling services at Whitstack Solutions. We provide reliable and cost-effective hardware solutions for all your business needs."
        />
        <link rel="canonical" href="/it-hardware-reselling" />
      </Helmet>
      <div>
        <NavBar></NavBar>
        <div className="ITH"></div>
        <TextPortion></TextPortion>
        <FooterSection></FooterSection>
      </div>
    </>
  );
};

export default HardwareResell;
