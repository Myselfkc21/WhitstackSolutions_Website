import NavBar from "../Home/Components/NavBar/NavBar";
import { Helmet } from "react-helmet";
import "./WebDevPage.css";

import TextPart from "./Components/TextPart/TextPart";
import FooterSection from "./Components/Footers/FooterSection";

const WebDevPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Whitstack Solutions</title>
        <meta
          name="description"
          content="Explore the diverse services offered by Whitstack Solutions, including cloud computing, web development, AI/ML solutions, IT staffing, and hardware reselling. Your one-stop destination for tech innovation."
        />
        <link rel="canonical" href="/Web-service-provider" />
      </Helmet>
      <div>
        <NavBar />
        <div className={`Head`}></div>
        <TextPart />
        <FooterSection />
      </div>
    </>
  );
};

export default WebDevPage;
