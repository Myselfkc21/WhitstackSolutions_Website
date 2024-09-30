import React from "react";
import "./ClientSection.css";
const ClientSection = () => {
  return (
    <div className="ClientContainer" id="clients">
      <h2>OUR CLIENTS</h2>
      <div className="clients">
        <a href="https://retinamidwest.com/"> <div className="client">
          <img title="retinamidwest" src="/retina.png" alt="retinamidwest logo" loading="lazy" width="auto" height="auto" />
        </div>
        </a>
        <a href="https://automatr.tech/">
          <div className="client">
            <img title="automatr" src="/automatrc.png" alt="automatr logo" loading="lazy" width="auto" height="auto" />
          </div>
        </a>
        <a href="https://www.naturalacneclinic.com/">
          <div className="client">
            <img title="naturalacneclinic" src="/acne.png" alt="naturalacneclinic logo" loading="lazy" width="auto" height="auto" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ClientSection;
