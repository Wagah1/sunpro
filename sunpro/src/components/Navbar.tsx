import React, { useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <img src="../sunpro4a.png"></img>
        <div className="mobile" onClick={toggleMenu}>
          <img
            src={isOpen ? "../exe.png" : "../bar.png"}
            alt={isOpen ? "close" : "options"}
          />
        </div>
        <div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="sunpro-shop.html">
              <li>Shop</li>
            </a>
            <a href="sunpro-services.html">
              <li>What we do</li>
            </a>
            <a href="sunpro-partners.html">
              <li>Our partners</li>
            </a>
            <a href="sunpro-contacts.html">
              <li>Contact us</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
