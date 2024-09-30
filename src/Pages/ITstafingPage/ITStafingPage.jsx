import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from '../Home/Components/NavBar/NavBar'
import HeadPart from '../WebDevPage/Components/HeadPart/HeadPart'
import TextPart from '../WebDevPage/Components/TextPart/TextPart'
import FooterSection from '../WebDevPage/Components/Footers/FooterSection'
import './ITStafingPage.css'
import TextSection from './Components/Textsection/TextSection'
const ITStafingPage = () => {
  return (
    <>
      <Helmet>
        <title>Services Provided</title>
        <meta name="description" content="Services Provided" />
        <link rel="canonical" href="/service4" />
      </Helmet>
      <div>
        <NavBar />
        <div className="head">
          <HeadPart />
        </div>
        <TextSection />
        <FooterSection />
      </div>
    </>
  )
}

export default ITStafingPage
