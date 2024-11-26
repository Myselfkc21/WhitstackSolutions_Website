import React from "react";
import NavBar from "./components/NavBar/NavBar";

import "./ContactUs.css";
import Head from "./components/Head/Head";
import FooterSection from "./components/Footers/FooterSection";
import { Helmet } from "react-helmet";
import ContactForm from "./components/ContactForm/ContactForm";
const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Whitstack Solutions</title>
        <meta
          name="description"
          content="Get in touch with Whitstack Solutions for cloud computing, web development, IT staffing, AI/ML, and IT hardware reselling services. We're here to assist you!"
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div className="headPart">
        <NavBar></NavBar>
        <Head></Head>
      </div>
      <ContactForm></ContactForm>
      <FooterSection></FooterSection>
    </>
  );
};

export default ContactUs;
