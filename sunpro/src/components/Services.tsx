import React, { useState, useEffect } from "react";
import "./services.css";

function Services() {
  const [count, setCount] = useState(0);
  const target = 1000;
  const duration = 2000;
  const interval = duration / target;

  useEffect(() => {
    if (count < target) {
      const timeoutId = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, interval);
      return () => clearTimeout(timeoutId);
    }
  }, [count, interval, target]);

  return (
    <div id="servicesDiv">
      <div className="service" id="solar">
        <div className="back-fade">
          <div className="words">
            <h2>Solar Installation</h2>
            <p>
              Save power costs by getting a hybrid solar power system. Forget
              about unstable -low quality power and blackouts
            </p>
            <div className="learn">
              <p>Learn more</p>
              <img src="../arrow-white.png" alt=" " />
            </div>
          </div>
        </div>
      </div>
      <div className="service" id="electricals">
        <div className="back-fade">
          <div className="words">
            <h2>Electrical Services</h2>
            <p>
              Experience quality grade installation on your electrical wiring
              system. We focus on safety and durability
            </p>
            <div className="learn">
              <p>Learn more</p>
              <img src="../arrow-white.png" alt=" " />
            </div>
          </div>
        </div>
      </div>
      <div className="service" id="water-heater">
        <div className="back-fade">
          <div className="words">
            <h2>Solar water heater</h2>
            <p>
              Let the sun do the warming for you and say goodbye to expensive
              electricity bills from electric water heaters
            </p>
            <div className="learn">
              <p>Learn more</p>
              <img src="../arrow-white.png" alt=" " />
            </div>
          </div>
        </div>
      </div>
      <div className="service" id="cctv">
        <div className="back-fade">
          <div className="words">
            <h2>Networks and CCTV</h2>
            <p>
              Enhance your security with high quality surveillance and seamless
              connection between your devices
            </p>
            <div className="learn">
              <p>Learn more</p>
              <img src="../arrow-white.png" alt=" " />
            </div>
          </div>
        </div>
      </div>
      <div id="quality">
        <h2>Quality assurance</h2>
        <p>
          Our team of experts is trained to ensure a seamless process from
          sizing and budgeting to implementation. We offer a six-month
          workmanship warranty, guaranteeing that your equipment is properly
          installed and built to last
        </p>
        <div id="happy">
          <p>Join our </p>
          <div id="count">
            {count}
            <p>+</p>
          </div>
          <p>happy clients</p>
          <div id="hire">
            <img src="../star.png" alt=" " />
            <p>Hire us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
