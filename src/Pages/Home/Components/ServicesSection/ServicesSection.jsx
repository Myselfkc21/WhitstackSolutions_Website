import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="ServiceContainer" id="ourservices">
      <h2>OUR SERVICES-</h2>
      <div className="services">
        <div className="service">
          <div className="left">
            <h3>Web Development</h3>
            <p>
              Our IT professionals can build robust software applications, web
              applications that can easily be integrated and be optimized across
              all platforms.
            </p>
            <button onClick={() => (window.location.href = "/service1")}>
              Learn more
            </button>
          </div>
          <div className="right">
            <img
              title="Web Development services"
              src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Web Development"
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <div className="service">
          <div className="left">
            <h3>Cloud Consulting Services</h3>
            <p>
              Whitstack cloud consulting services can help you find the right
              cloud design that fits your needs for innovation and growth.
            </p>
            <button onClick={() => (window.location.href = "/service2")}>
              Learn more
            </button>
          </div>

          <div className="right">
            <img
              title="Cloud Services"
              src="https://www.stockvault.net/data/2019/04/29/264553/preview16.jpg"
              alt="Cloud Consulting"
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <div className="service">
          <div className="left">
            <h3>AI/ML Services</h3>
            <p>
              Our IT professionals can build robust software applications, web
              applications that can easily be integrated and be optimized across
              all platforms.
            </p>
            <button onClick={() => (window.location.href = "/service3")}>
              Learn more
            </button>
          </div>
          <div className="right">
            <img
              title="AI/ML Services"
              width="auto"
              height="auto"
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI/ML Services"
            />
          </div>
        </div>
        <div className="service">
          <div className="left">
            <h3>IT Staffing Services</h3>
            <p>
              Technical recruiting is key to business success and companies need
              a partner who understands the skills to build a strong workforce.
            </p>
            <button onClick={() => (window.location.href = "/service4")}>
              Learn more
            </button>
          </div>
          <div className="right">
            <img
              title="IT staffing Services"
              width="auto"
              height="auto"
              loading="lazy"
              src="https://img.freepik.com/free-photo/young-person-during-intership_23-2149315632.jpg?w=360&t=st=1727531894~exp=1727532494~hmac=b896a087847709cc4b300d916b3145a95fe8fe1c654541db426afc672a7008e7"
              alt="AI/ML Services"
            />
          </div>
        </div>
        <div className="service">
          <div className="left">
            <h3>IT Hardware Reselling Services</h3>
            <p>
              Quality IT hardware reselling is essential, and businesses need a
              partner who delivers reliable products and expert support to meet
              their technology needs.
            </p>
            <button onClick={() => (window.location.href = "/service5")}>
              Learn more
            </button>
          </div>
          <div className="right">
            <img
              title="IT Hardware reselling Services"
              width="auto"
              height="auto"
              loading="lazy"
              src="https://images.unsplash.com/photo-1659540546005-1c30317c2b21?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI/ML Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
