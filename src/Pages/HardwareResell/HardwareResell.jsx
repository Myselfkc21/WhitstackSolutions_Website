import React from "react";
import "./HardwareResell.css";
import TextPortion from "./Components/TextPortion/TextPortion";
import FooterSection from "../CloudConsultingPage/Components/Footers/FooterSection";
import NavBar from "../Home/Components/NavBar/NavBar";
import HeadPart from "../WebDevPage/Components/HeadPart/HeadPart";
const HardwareResell = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="ITH">
        <HeadPart></HeadPart>
      </div>
      <TextPortion></TextPortion>
      <FooterSection></FooterSection>
    </div>
  );
};

export default HardwareResell;
