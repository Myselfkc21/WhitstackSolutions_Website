import React from 'react';
import NavBar from '../Home/Components/NavBar/NavBar';
import './CloudConsulting.css';
import TextPortion from './Components/TextPortion/TextPortion';
import { Helmet } from 'react-helmet';
import HeadPart from '../WebDevPage/Components/HeadPart/HeadPart';
import FooterSection from './Components/Footers/FooterSection';
const CloudConsultingPage = () => {
  return (
    <>
      <Helmet>
        <title>Services Provided</title>
        <meta name="description" content="Services Provided" />
        <link rel="canonical" href="/service2" />
      </Helmet>
      <div>
        <NavBar />
        <div className="heads">
          <HeadPart />
        </div>
        <TextPortion />
        <FooterSection />
      </div>
    </>
  )
}

export default CloudConsultingPage
