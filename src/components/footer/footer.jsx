import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../images/logo3.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-body">
      <div className="footer-center">
          <ul className="footer-list">
            <h1 className="footer-title">
              <b>Services</b>
            </h1>
            <li>
              <a className="footer-links" href="/culinary-craftsmanship">
                Wi-Fi
              </a>
            </li>
            <li>
              <a className="footer-links" href="/sensory-food-experience">
                PlayPlaces & Parties
              </a>
            </li>
            <li>
              <a className="footer-links" href="/sensory-food-experience">
                Mobile Order
              </a>
            </li>
            <li>
              <a className="footer-links" href="/sensory-food-experience">
                Family Fun Hub
              </a>
            </li>
            <li>
              <a className="footer-links" href="/sensory-food-experience">
                Services Overview
              </a>
            </li>
          </ul>
        <div className="footer-right">
          <img className="footer-logo" src={Logo} alt="LogoImage" />

          <h1 className="footer-title">Contact Us</h1>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://www.twitter.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.youtube.com/your-youtube-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon" />
            </a>
          </div>
          <p className="footer-p">
            Monday - Sunday: 8:00 AM until 8:00 PM (GMT +2)
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-p footer-bottom-p">
          © 2022 - 2023 WizardServer. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
