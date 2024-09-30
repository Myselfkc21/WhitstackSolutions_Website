import React, { useEffect, useState } from 'react';
import NavBar from '../Home/Components/NavBar/NavBar';
import { Helmet } from 'react-helmet';
import './WebDevPage.css';
import HeadPart from './Components/HeadPart/HeadPart';
import TextPart from './Components/TextPart/TextPart';
import FooterSection from './Components/Footers/FooterSection';

const WebDevPage = () => {

  return (
    <>
      <Helmet>
        <title>Services Provided</title>
        <meta name="description" content="Services Provided" />
        <link rel="canonical" href="/service1" />
      </Helmet>
      <div>
          <NavBar />
        <div className={`Head`}>
          <HeadPart />
        </div>
        <TextPart />
        <FooterSection />
      </div>
    </>
  );
};

export default WebDevPage;
