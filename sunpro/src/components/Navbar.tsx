import React, { useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <nav>
        <img src="sunpro4a.png"></img>
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
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              Shop
              <ul
                className={`dropMenu ${isDropdownOpen ? "show" : ""}`}
                id="shopMenu"
              >
                <li className="dropItem">Solar panels</li>
                <li className="dropItem">Solar inverters</li>
                <li className="dropItem">Solar batteries</li>
                <li className="dropItem">Solar floodlights</li>
                <li className="dropItem">Decorative lights</li>
                <li className="dropItem">Electricals</li>
                <li className="dropItem">Sunking</li>
              </ul>
            </li>
            <li
              className="navItem"
              id="services"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              What we do
              <ul
                className={`dropMenu ${isDropdownOpen ? "show" : ""}`}
                id="servicesMenu"
              >
                <li className="dropItem">Solar installation</li>
                <li className="dropItem">Electrical Services</li>
                <li className="dropItem">Solar water heater</li>
                <li className="dropItem">Networks & CCTV</li>
                <li className="dropItem">Maintenance & Others</li>
                <li className="dropItem">Consultation</li>
              </ul>
            </li>
            <a href="#blog&offers" className="navItem" id="blog&offers">
              <li>News & Offers</li>
            </a>
            <a href="sunpro-contacts.html" className="navItem" id="contacts">
              <li>Contact us</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
