import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../../images/logo1.png";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="body">
      <nav>
        <div className="logoparent">
          <img className="logo-nav" src={Logo} alt="Logo" />{" "}
        </div>
        {/* //////////////////////////////////// */}
        <div
          className={`hamburger ${menuOpen ? "toggle" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {/* Make sure the "nav-links" class is always present */}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className="a" href="#h">
              Home
            </Link>
          </li>
          <li>
            <Link className="a" href="#h">
              Menu
            </Link>
          </li>
          <li>
            <Link className="a" href="#h">
              Services
            </Link>
          </li>
          <li>
            <Link className="a" href="#">
              About us
            </Link>
          </li>
          <li>
            <Link className="a" href="#">
              Contact Us
            </Link>
          </li>
         <li> <section className="menu__right">
              <a className="loginbtnicon" href="#">
                login<i class="ri-login-box-fill"></i>
              </a>
              <div className="custom1__search">
                <input type="search" placeholder="search item ...." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </section></li>
        </ul>
       
        <a className="buyicon" href="#" ><i class="ri-shopping-basket-fill"></i></a>
      </nav>
    </div>
  );
}

export default Nav;
