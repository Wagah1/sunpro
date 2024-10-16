import React, { useRef, useEffect, useState } from "react";
import "./offers.css";

function Offers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseActive, setIsMouseActive] = useState(true);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstChild = container.firstElementChild;
      if (firstChild) {
        container.appendChild(firstChild);
      }
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const lastChild = container.lastElementChild;
      if (lastChild) {
        container.insertBefore(lastChild, container.firstElementChild);
      }
    }
  };

  const handleMouseMove = () => {
    setIsMouseActive(true);
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setIsMouseActive(false);
    }, 5000);
  };

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isMouseActive) {
      scrollTimeout.current = setInterval(() => {
        scrollNext();
      }, 5000);
    } else {
      if (scrollTimeout.current) {
        clearInterval(scrollTimeout.current);
      }
    }

    return () => {
      if (scrollTimeout.current) {
        clearInterval(scrollTimeout.current);
      }
    };
  }, [isMouseActive]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div id="horizontal-scroll-container">
      <div id="scroll-btns">
        <button onClick={scrollPrev} className="scroll-button">
          <img src="../previous.png" alt=" " />
        </button>
        <button onClick={scrollNext} className="scroll-button">
          <img src="../next.png" alt=" " />
        </button>
      </div>
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="offer-item">
          <img src="../power-play.png" />
          <div className="details">
            <h3>PowerPlay Pro</h3>
            <h4>600W inverter and 800Wh Lithium ion battery</h4>
            <ul>
              <li>
                PowerPlay Pro @<span>Ksh67,000/-</span>
              </li>
              <li>
                With lighting kit @<span>Ksh72,000/-</span>
              </li>
              <li>
                With two 220W solar panels @<span>Ksh85,000/-</span>
              </li>
            </ul>
            <p>
              <a href="#contacts">Contact us</a> for more SunKing products
            </p>
            <button className="buy">Buy this item</button>
          </div>
        </div>
        <div className="offer-item">
          <img src="../home-8k.png" />
          <div className="details">
            <h3>Home 8000</h3>
            <h4>
              3.3kW inverter, 2.56kWh Lithium ion battery, and 450W solar panels
            </h4>
            <ul>
              <li>
                Inverter, one battery, & four panels @<span>Ksh250,000/-</span>
              </li>
              <li>
                Inverter, two batteries, & six panels @<span>Ksh365,000/-</span>
              </li>
              <li>
                Inverter, two batteris, & eight panels @
                <span>Ksh400,000/-</span>
              </li>
            </ul>
            <p>
              <a href="#contacts">Contact us</a> for more SunKing products
            </p>
            <button className="buy">Buy this item</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
