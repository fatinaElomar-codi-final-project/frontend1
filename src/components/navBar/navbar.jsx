import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/logo1.png";
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className="body">
      <nav>
        <div className="logo">
          <img src={Logo} alt="LogoImage" />
        </div>
        <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {/* Make sure the "nav-links" class is always present */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Add your menu items here */}
          <li>
            <Link className="a" href="#h">Home</Link>
          </li>
          <li>
            <Link className="a" href="#h">Menu</Link>
          </li>
          <li>
            <Link className="a" href="#h">Services</Link>
          </li>
          <li>
            <Link className="a"  href="#">About us</Link>
          </li>
          <li>
            <Link className="a" href="#">Contact Us</Link>
          </li>
          <li>
            <button  className="login-button" href="#">
              Login
            </button>
          {/* </li>
          <li> */}
            <button className="join-button" href="#">
              Join
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
