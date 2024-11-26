import React from "react";
import NavBar from "../Home/Components/NavBar/NavBar";
import "./CloudConsulting.css";
import TextPortion from "./Components/TextPortion/TextPortion";
import { Helmet } from "react-helmet";
import FooterSection from "./Components/Footers/FooterSection";
const CloudConsultingPage = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Computing Services | Whitstack Solutions</title>
        <meta
          name="description"
          content="Unlock the power of the cloud with Whitstack Solutions. We provide scalable, secure, and innovative cloud computing services to enhance your business performance."
        />
        <link rel="canonical" href="/cloud-computing-services" />
      </Helmet>
      <div>
        <NavBar />
        <div className="heads"></div>
        <TextPortion />
        <FooterSection />
      </div>
    </>
  );
};

export default CloudConsultingPage;
