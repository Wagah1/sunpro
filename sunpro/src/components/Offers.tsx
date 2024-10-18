import React, { useRef, useEffect, useState } from "react";
import "./offers.css";

function Offers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseActive, setIsMouseActive] = useState(true);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = "translateX(-18em)";
      setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
        container.appendChild(container.firstElementChild as Node);
      }, 500);
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.style.transition = "none";
      container.insertBefore(
        container.lastElementChild as Node,
        container.firstElementChild
      );
      container.style.transform = "translateX(-18em)";
      setTimeout(() => {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = "translateX(0)";
      }, 0);
    }
  };

  const handleMouseMove = () => {
    setIsMouseActive(true);
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setIsMouseActive(false);
    }, 10000);
  };

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isMouseActive) {
      scrollTimeout.current = setInterval(() => {
        scrollNext();
      }, 10000);
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
      <div id="top">
        <h3>Featured packages</h3>
        <div id="scroll-btns">
          <button onClick={scrollPrev} className="scroll-button">
            <img src="../previous.png" alt=" " />
          </button>
          <button onClick={scrollNext} className="scroll-button">
            <img src="../next.png" alt=" " />
          </button>
        </div>
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
            <div className="end-btns">
              <button className="share">
                <img src="../share.png" alt="Share" />
              </button>
              <button className="buy">Buy this item</button>
            </div>
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
            <div className="end-btns">
              <button className="share">
                <img src="../share.png" alt="Share" />
              </button>
              <button className="buy">Buy this item</button>
            </div>
          </div>
        </div>
        <div className="offer-item">
          <img src="../3kVA.jpg" />
          <div className="details">
            <h3>3kVA complete kit</h3>
            <h4>
              3kW inverter, two 12V200Ah batteries, four 450W panels, plus all
              accessories, and installation charges
            </h4>
            <ul>
              <li>
                With Flooded batteries @<span>Ksh205,000/-</span>
              </li>
              <li>
                With Gel batteries @<span>Ksh215,000/-</span>
              </li>
              <li>
                With Lithium ion batteries @<span>Ksh245,000/-</span>
              </li>
            </ul>
            <p>
              <a href="#contacts">Contact us</a> for more information
            </p>
            <div className="end-btns">
              <button className="share">
                <img src="../share.png" alt="Share" />
              </button>
              <button className="buy">Buy this item</button>
            </div>
          </div>
        </div>
        <div className="offer-item">
          <img src="../5kVA.jpg" />
          <div className="details">
            <h3>5kVA complete kit</h3>
            <h4>
              5kW inverter, four 12V200Ah batteries, eight 450W panels, plus all
              accessories, and installation charges
            </h4>
            <ul>
              <li>
                With Flooded batteries @<span>Ksh390,000/-</span>
              </li>
              <li>
                With Gel batteries @<span>Ksh410,000/-</span>
              </li>
              <li>
                With Lithium ion batteries @<span>Ksh550,000/-</span>
              </li>
            </ul>
            <p>
              <a href="#contacts">Contact us</a> for more information
            </p>
            <div className="end-btns">
              <button className="share">
                <img src="../share.png" alt="Share" />
              </button>
              <button className="buy">Buy this item</button>
            </div>
          </div>
        </div>
        <div className="offer-item">
          <img src="../10kVA.jpg" />
          <div className="details">
            <h3>10kVA complete kit</h3>
            <h4>
              10kW inverter, 10kWh battery pack, 16 450W panels, plus all
              accessories, and installation charges
            </h4>
            <ul>
              <li>
                With Flooded batteries @<span>Ksh750,000/-</span>
              </li>
              <li>
                With Gel batteries @<span>Ksh850,000/-</span>
              </li>
              <li>
                With Lithium ion batteries @<span>Ksh999,000/-</span>
              </li>
            </ul>
            <p>
              <a href="#contacts">Contact us</a> for more information
            </p>
            <div className="end-btns">
              <button className="share">
                <img src="../share.png" alt="Share" />
              </button>
              <button className="buy">Buy this item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
