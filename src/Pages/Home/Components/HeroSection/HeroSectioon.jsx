import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSectioon = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/image05.png", "/image1.jpg", "/software.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container" id="Aboutus">
      <div className="Intro">
        <div className="welcomePart">
          <header>
            <h1>
              Welcome to <br /> Whitstack Solutions
            </h1>
          </header>
          <p>
            Transform Your Business with Whitstack's Expert IT Strategy and
            Digital Solutions <br /> <br />
            Leverage Whitstack's top-tier expertise and advanced tech
            capabilities to develop a tailored IT strategy that drives your
            organization’s digital transformation. Our solutions align with your
            business goals, ensuring a seamless technological transition.
            <br /> <br />
            At Whitstack, we help individuals and companies tackle complex
            business challenges with speed, precision, and customized solutions.
            Every business is unique, and we prioritize understanding your
            company’s structure and objectives to deliver personalized results
            that set you up for success.
          </p>
        </div>
      </div>

      <div className="Images">
        <img
          title="It Services"
          id="img2"
          src={images[currentImage]}
          alt="Dynamic images"
          loading="lazy"
          width="auto"
          height="auto"
        />
      </div>

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
};

export default HeroSectioon;
