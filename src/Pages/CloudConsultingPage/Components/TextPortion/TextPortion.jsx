import React from "react";
import "./TextPortion.css";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsFillCloudyFill } from "react-icons/bs";
const TextPortion = () => {
  return (
    <div className="TextPortionContainer">
      <h1>Cloud Services</h1>
      <p>
        Cloud technology empowers businesses with scalability, cost efficiency,
        and reliability, making it the foundation for modern business
        operations. By adopting a hybrid cloud strategy, companies can balance
        security and flexibility, ensuring seamless operations and optimized
        performance. Strategic cloud integration reduces downtime, enhances data
        management, and drives sustainable growth. Whitstack’s tailored cloud
        solutions help businesses embrace the future confidently.
      </p>
      <div className="text">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              className="cloud-icon"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                color: "#f6f6f6",
                marginBottom: "20px",
                marginTop: "20px",
                background: "linear-gradient(45deg, #2196F3, #00BCD4)",
                padding: "6px",
                borderRadius: "20px",
                textFillColor: "transparent",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <BsFillCloudyFill />
            </div>

            <h2 style={{ textWrap: "nowrap" }}>Cloud Consulting Service</h2>
          </div>
          <p>
            Legacy IT environments can be complex. Whitstack’s Cloud Consulting
            Services are designed to help you navigate these challenges, finding
            the perfect hybrid cloud solution that fosters innovation and
            growth. Cloud computing has become the go-to solution for overcoming
            data and technology challenges, but it also brings its own set of
            complexities. The vast array of cloud solutions available can create
            uncertainty about which options truly align with your business
            needs. Whitstack’s expert team provides comprehensive cloud adoption
            consulting and implementation services for hyper scalers like Amazon
            Web Services, Microsoft Azure, and Google Cloud.
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: "15px",
            }}
          >
            <div
              className="cloud-icon"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                color: "#f6f6f6",
                marginBottom: "20px",
                marginTop: "20px",
                background: "linear-gradient(45deg, #2196F3, #00BCD4)",
                padding: "6px",
                borderRadius: "20px",
                textFillColor: "transparent",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <AiOutlineCloudServer />
            </div>
            <h2>Cloud Migrations</h2>
          </div>
          <p>
            Migrating to the cloud is a critical step in enhancing business
            agility, enabling your company to swiftly access the compute power
            it needs and adapt to market opportunities. Whitstack’s Cloud
            Migration Services are designed to bridge the gap for organizations
            transitioning to the cloud. Our specialized team follows best
            practices to assess your current applications, identify the optimal
            cloud mix, pinpoint technology and skill gaps, and develop a robust
            migration plan. By moving to the cloud, your business can
            significantly boost its agility, rapidly modifying or creating new
            processes to seize emerging opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextPortion;
