import React from "react";
import "./TextPortion.css";
const TextPortion = () => {
  return (
    <div className="TextPortionContainer">
      <h1>Cloud Services</h1>
      <p>
        Cloud technology is a transformative shift, offering scalability,
        reliability, and the potential to revolutionize your business
        operations. However, integrating private clouds, public clouds, and
      </p>
      <div className="text">
        <div>
          <h2>Cloud Consulting Service</h2>
          <p>
            Legacy IT environments can be complex. Whitstack’s Cloud Consulting
            Services are designed to help you navigate these challenges, finding
            the perfect hybrid cloud solution that fosters innovation and
            growth. Cloud computing has become the go-to solution for overcoming
            data and technology challenges, but it also brings its own set of
            complexities. The vast array of cloud solutions available can create
            uncertainty about which options truly align with your business
            needs. Whitstack’s expert team provides comprehensive cloud adoption
            consulting and implementation services for hyper scalers like Amazon Web Services, Microsoft Azure, and Google Cloud.
          </p>
        </div>
        <div>
          <h2>Cloud Migrations</h2>
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
