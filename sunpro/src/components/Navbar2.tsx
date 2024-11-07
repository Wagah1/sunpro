import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <nav>
        <Link to="/home">
          <img src="sunpro-logo.png" alt="Sunpro" id="logo" />
        </Link>
        <div className="mobile" onClick={toggleMenu}>
          <img
            src={isOpen ? "../exe.png" : "../bar.png"}
            alt={isOpen ? "close" : "options"}
          />
        </div>
        <div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li
              className="navItem"
              id="shop"
              onClick={() => handleDropdown("shop")}
              onMouseLeave={closeDropdown}
            >
              Shop
              <ul
                className={`dropMenu ${openDropdown === "shop" ? "show" : ""}`}
                id="shopMenu"
              >
                <a href="#panels-container">
                  <li className="dropItem">Solar panels</li>
                </a>
                <a href="#inverters-container">
                  <li className="dropItem">Solar inverters</li>
                </a>
                <a href="#batteries-container">
                  <li className="dropItem">Solar batteries</li>
                </a>
                <a href="#sunking-container">
                  <li className="dropItem">Sunking products</li>
                </a>
                <a href="#heaters-container">
                  <li className="dropItem">Solar water heaters</li>
                </a>
                <a href="#cctvKits-container">
                  <li className="dropItem">CCTV Kits</li>
                </a>
              </ul>
            </li>
            <a
              href="#horizontal-scroll-container"
              className="navItem"
              id="blog&offers"
            >
              <li>Offers</li>
            </a>
            <a href="#footer" className="navItem">
              <li>Contact us</li>
            </a>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar2;
