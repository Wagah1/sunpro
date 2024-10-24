import React, { useRef, useEffect, useState } from "react";
import "./offers.css";

const Offers: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseActive, setIsMouseActive] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

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

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isShareVisible, setIsShareVisible] = useState(false);

  const toggleDet = (item: string) => {
    setOpenDetails((prev) => (prev === item ? null : item));
  };

  const togglePopUp = (item: string) => {
    setIsPopUpVisible(!isPopUpVisible);
    setSelectedItem(item);
  };

  const [copied, setCopied] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard
      .writeText(
        "Check out this amazing offer I found on Sunpro:\n" +
          window.location.href
      )
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
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
        {[
          {
            imgSrc: "../power-play.png",
            title: "PowerPlay Pro",
            details: "A 600W inverter and 800Wh Lithium ion battery combo",
            priceDetails: [
              { desc: "PowerPlay Pro @", price: "Ksh67,000/-" },
              { desc: "With lighting kit @", price: "Ksh72,000/-" },
              { desc: "With two 220W solar panels @", price: "Ksh85,000/-" },
            ],
            id: "powerplay",
          },
          {
            imgSrc: "../home-8k.png",
            title: "Home 8000",
            details:
              "3.3kW inverter, 2.56kWh Lithium ion battery, and four 450W solar panels",
            priceDetails: [
              {
                desc: "Inverter, one battery, & four panels @",
                price: "Ksh250,000/-",
              },
              {
                desc: "Inverter, two batteries, & six panels @",
                price: "Ksh365,000/-",
              },
              {
                desc: "Inverter, two batteries, & eight panels @",
                price: "Ksh400,000/-",
              },
            ],
            id: "home8000",
          },
          {
            imgSrc: "../3kVA.jpg",
            title: "3kVA complete kit",
            details:
              "3kW inverter, two 12V200Ah batteries, and four 450W panels",
            priceDetails: [
              { desc: "With Flooded batteries @", price: "Ksh205,000/-" },
              { desc: "With Gel batteries @", price: "Ksh215,000/-" },
              { desc: "With Lithium ion batteries @", price: "Ksh245,000/-" },
            ],
            id: "3kva",
          },
          {
            imgSrc: "../5kVA.jpg",
            title: "5kVA complete kit",
            details:
              "5kW inverter, four 12V200Ah batteries, and eight 450W panels",
            priceDetails: [
              { desc: "With Flooded batteries @", price: "Ksh390,000/-" },
              { desc: "With Gel batteries @", price: "Ksh410,000/-" },
              { desc: "With Lithium ion batteries @", price: "Ksh550,000/-" },
            ],
            id: "5kva",
          },
          {
            imgSrc: "../10kVA.jpg",
            title: "10kVA complete kit",
            details: "10kW inverter, 10kWh battery pack, and 16 - 450W panels",
            priceDetails: [
              { desc: "With Flooded batteries @", price: "Ksh750,000/-" },
              { desc: "With Gel batteries @", price: "Ksh850,000/-" },
              { desc: "With Lithium ion batteries @", price: "Ksh999,000/-" },
            ],
            id: "10kva",
          },
        ].map((item, index) => (
          <div className="offer-item" key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <div
              className={`details ${openDetails === item.id ? "open-det" : ""}`}
            >
              <div className="det-head" onClick={() => toggleDet(item.id)}>
                <h3>{item.title}</h3>
                <img
                  src={openDetails === item.id ? "../down.png" : "../up.png"}
                  alt={openDetails === item.id ? "Close" : "Open"}
                />
              </div>
              <div
                className={`det ${openDetails === item.id ? "open-det" : ""}`}
              >
                <h4>{item.details}</h4>
              </div>
              <div className="end-btns">
                <button className="share" onClick={handleShareClick}>
                  {copied ? "Link copied!" : "Share link"}
                </button>
                <button className="order" onClick={() => togglePopUp(item.id)}>
                  Order
                </button>
              </div>
              {isPopUpVisible && selectedItem === item.id && (
                <div className="pop-up" id={item.id}>
                  <button
                    className="close"
                    onClick={() => togglePopUp(item.id)}
                  >
                    <img src="../exe.png" alt="Close" />
                  </button>
                  <ul>
                    {item.priceDetails.map((priceDetail, i) => (
                      <li key={i}>
                        {priceDetail.desc}
                        <span>{priceDetail.price}</span>
                        {i === 0 && (
                          <button className="order" id={item.id}>
                            Order
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p>
                    <a href="#contacts">Contact us</a> for more such products
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={`pop-up ${isPopUpVisible ? "show" : ""}`}>
        <button
          className="close"
          onClick={() => togglePopUp(selectedItem || "")}
        >
          <img src="../exe.png" alt="Close" />
        </button>
        <form>
          <label>
            Selected Item:
            <input type="text" value={selectedItem || ""} readOnly />
          </label>
          {/* Add other form fields here */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Offers;
