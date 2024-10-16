import React, { useState } from "react";
import "./popular.css";

function Popular() {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);

  const handleImageClick = (id: string) => {
    setVisiblePopup(id);
  };

  const handleClosePopup = () => {
    setVisiblePopup(null);
  };

  return (
    <div id="popular">
      <div id="top">
        <h2>Popular solar packages:</h2>
        <button>I want a custom quote</button>
      </div>
      <div id="packages">
        <div
          className="package"
          id="3kw"
          onClick={() => handleImageClick("3kw")}
        >
          <img src="../3kW.jpg" alt="3kW Complete kit" />
          {visiblePopup === "3kw" && (
            <div className="popup-overlay" onClick={handleClosePopup}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>3kW Complete Kit</h3>
                <p>
                  It contains:
                  <ul>
                    <li>Four 450W solar panels</li>
                    <li>One 3kVA hybrid inverter</li>
                    <li>Two 12V 200Ah Lithium ion/Gel/Flooded batteries</li>
                    <li>
                      All accessories eg solar mounting structures, cables, and
                      circuit breakers
                    </li>
                    <li>Transportation and installation costs</li>
                  </ul>
                  This system is ideal for up to a two-bedroom house. It can run
                  your TV, fridge, lights, WiFi router, and other small
                  appliances. It is not ideal for any heating appliances.
                </p>
                <h4>Costs:</h4>
                <p>
                  With Flooded batteries: Ksh 205k <br /> With Gel batteries:
                  Ksh 215k <br /> With Lithium ion batteries: Ksh 245k
                </p>
                <button className="order">Order</button>
                <button className="close-button" onClick={handleClosePopup}>
                  <img src="../exe.png" alt=" " />
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          className="package"
          id="5kw"
          onClick={() => handleImageClick("5kw")}
        >
          <img src="../5kW.jpg" alt="5kW Complete kit" />
          {visiblePopup === "5kw" && (
            <div className="popup-overlay" onClick={handleClosePopup}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>5kW Complete Kit</h3>
                <p>
                  It contains:
                  <ul>
                    <li>Eight 450W solar panels</li>
                    <li>One 5kVA hybrid inverter</li>
                    <li>Four 12V 200Ah Lithium ion/Gel/Flooded batteries</li>
                    <li>
                      All accessories eg solar mounting structures, cables, and
                      circuit breakers
                    </li>
                    <li>Transportation and installation costs</li>
                  </ul>
                  This system is ideal for up to a four-bedroom house. It can
                  run your TV, fridge, freezer, washing machine, iron box,
                  microwave oven, blender, electric kettle, lights, WiFi router,
                  and other small appliances. It is not ideal for instant water
                  heaters / electric shower.
                </p>
                <h4>Costs:</h4>
                <p>
                  With Flooded batteries: Ksh 390k <br /> With Gel batteries:
                  Ksh 410k <br /> With Lithium ion batteries: Ksh 550k
                </p>
                <button className="order">Order</button>
                <button className="close-button" onClick={handleClosePopup}>
                  <img src="../exe.png" alt=" " />
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          className="package"
          id="10kw"
          onClick={() => handleImageClick("10kw")}
        >
          <img src="../10kW.jpg" alt="10kW Complete kit" />
          {visiblePopup === "10kw" && (
            <div className="popup-overlay" onClick={handleClosePopup}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>10kW Complete Kit</h3>
                <p>
                  It contains:
                  <ul>
                    <li>16 - 450W solar panels</li>
                    <li>One 10kVA hybrid inverter</li>
                    <li>Two 5kWh Lithium ion batteries</li>
                    <li>
                      All accessories eg solar mounting structures, cables, and
                      circuit breakers
                    </li>
                    <li>Transportation and installation costs</li>
                  </ul>
                  This system is ideal for a 4+ bedroom house. It can run your
                  TV, fridge, freezer, washing machine, iron box, microwave
                  oven, blender, electric kettle, air-fryer, induction cooker,
                  lights, WiFi router, and other small appliances. We recommend
                  coupling it with a solar water heating system to avoid
                </p>
                <h4>Costs:</h4>
                <p>With Lithium ion batteries: Ksh 1.25M</p>
                <button className="order">Order</button>
                <button className="close-button" onClick={handleClosePopup}>
                  <img src="../exe.png" alt=" " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popular;
