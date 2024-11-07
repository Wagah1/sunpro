import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
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
          <img src="sunpro-logo.png" alt="Logo" id="logo" />
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
              <Link to="/shop">Shop</Link>
              <ul
                className={`dropMenu ${openDropdown === "shop" ? "show" : ""}`}
                id="shopMenu"
              >
                <li className="dropItem">Solar panels</li>
                <li className="dropItem">Solar inverters</li>
                <li className="dropItem">Solar batteries</li>
                <li className="dropItem">Sunking Products</li>
                <li className="dropItem">Solar water heaters</li>
                <li className="dropItem">CCTV Kits</li>
              </ul>
            </li>
            <li
              className="navItem"
              id="services"
              onClick={() => handleDropdown("services")}
              onMouseLeave={closeDropdown}
            >
              <a href="#servicesDiv">What we do</a>
              <ul
                className={`dropMenu ${
                  openDropdown === "services" ? "show" : ""
                }`}
                id="servicesMenu"
              >
                <li className="dropItem">Solar installation</li>
                <li className="dropItem">Electrical Services</li>
                <li className="dropItem">Solar water heater</li>
                <li className="dropItem">Networks & CCTV</li>
                <li className="dropItem">Operation & Maintenance</li>
                <li className="dropItem">Consultation</li>
              </ul>
            </li>
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

export default Navbar;
