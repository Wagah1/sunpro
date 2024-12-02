import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <nav>
        <Link to="/">
          <img src="../sunpro-logo.png" alt="Logo" id="logo" />
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
                <li className="dropItem">
                  <Link to="/shop#panels-container">Solar panels</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop#inverters-container">Solar inverters</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop#batteries-container">Solar batteries</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop#heaters-container">Solar water heaters</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop#sunking-container">Sunking Products</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop#cctvKits-container">CCTV Kits</Link>
                </li>
              </ul>
            </li>
            <li className="navItem" id="services">
              <Link to="/#servicesDiv">What we do</Link>
            </li>
            <li className="navItem">
              <Link to="/#footer">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
