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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="body">
      <nav>
        <div className="logoparent">
          <img className="logo-nav" src={Logo} alt="Logo" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "toggle" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className="a" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="a" to="/cart" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <a href="/#services" className="a" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <Link className="a" to="/aboutuspage" onClick={closeMenu}>
              About us
            </Link>
          </li>
          <li>
            <a href="#footer" className="a" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
          <li>
            <section className="menu__right">
              <a className="loginbtnicon" href="#">
                login<i class="ri-login-box-fill"></i>
              </a>
              <div className="custom1__search">
                <input type="search" placeholder="search item ...." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </section>
          </li>
        </ul>

        <Link className="buyicon" to="/cart">
          <i class="ri-shopping-basket-fill"></i>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
