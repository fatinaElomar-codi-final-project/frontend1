import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../../images/logo9.png";
import { useCart } from "../useContext/useContexCart";
import { Badge } from "antd";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart] = useCart(); // Assuming the useCart hook returns an array of cart items
  const [searchKeyword, setSearchKeyword] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className="body">
      <nav>
        <div className="logoparent">
          <img className="logo-nav" src={Logo} alt="Logo" />
          <h2 className="logo-name-n">Wizard Server</h2>
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
              <div className="custom1__search">
                <input
                  type="search"
                  placeholder="Search item..."
                  style={{
                    margin: "10px",
                    width: "200px",
                    height: "40px",
                  }}
                  value={searchKeyword}
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </section>
          </li>
        </ul>

        <Link className="buyicon" to="/cartpage">
          <Badge count={cart.length} showZero>
            <i className="ri-shopping-basket-fill icon-large"></i>
          </Badge>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
