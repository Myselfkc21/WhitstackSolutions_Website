import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSectioon from "./Components/HeroSection/HeroSectioon";
import MainSection from "./Components/MainSection/MainSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import PartnersAndClients from "./Components/PartnersAndClients/PatnersAndClients";
import "./Home.css";
import FooterSection from "./Components/Footers/FooterSection";
import ClientSection from "./Components/ClientsSection/ClientSection";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Whitstack Solutions | Cloud, Web Development & IT Services
        </title>
        <meta
          name="description"
          content="Discover top-notch cloud computing, web development, AI/ML, IT staffing, and hardware reselling services at Whitstack Solutions. Empowering businesses with innovative tech solutions."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <NavBar></NavBar>

      <div className="Homes">
        <HeroSectioon></HeroSectioon>
        <MainSection></MainSection>

        <ServicesSection></ServicesSection>
        <PartnersAndClients></PartnersAndClients>
        <ClientSection></ClientSection>
        <FooterSection></FooterSection>
      </div>
    </>
  );
};

export default Home;
