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
                  <Link to="/shop/panels">Solar panels</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop/inverters">Solar inverters</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop/batteries">Solar batteries</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop/water-heaters">Solar water heaters</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop/sunking">Sunking Products</Link>
                </li>
                <li className="dropItem">
                  <Link to="/shop/cctv-kits">CCCTV Kits</Link>
                </li>
              </ul>
            </li>
            <li className="navItem" id="services">
              <Link to="/home/services">What we do</Link>
            </li>
            <li className="navItem">
              <Link to="/home/footer">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
