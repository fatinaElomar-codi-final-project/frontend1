import React, { useEffect } from "react";
import "./hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heroimg from "../../images/hero.jpg";
import Hero1img from "../../images/hero1.jpg";
import Hero3img from "../../images/hero3.jpeg";
import Hero2img from "../../images/hero2.webp";

export default function Hero() {
  useEffect(() => {
    // Initialize the slider or add any necessary settings
  }, []);

  const sliderSettings = {
    dots: false, // Remove navigation dots
    arrows: false, // Hide navigation arrows
    infinite: true, // Enable infinite looping
    autoplay: true, // Autoplay the carousel
    speed: 2000, // Autoplay speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <div>
      <section className="hero">
        <Slider {...sliderSettings} className="hero-carousel">
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Heroimg})` }}
            >
              {/* <h1 className="hero-text">Text 1</h1> */}
            </div>
          </div>
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Hero1img})` }}
            >
              {/* <h1 className="hero-text">Text 2</h1> */}
            </div>
          </div>
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Hero2img})` }}
            >
              {/* <h1 className="hero-text">Text 3</h1> */}
            </div>
          </div>
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Hero3img})` }}
            ></div>
          </div>
        </Slider>
        <div className="hero-content">
          <h1 className="hero-text">
            <span className="hero-text-first-span" style={{fontSize: '130px'}}>Order</span><span className="herospan">Best Food</span>
          </h1>
          <p className="hero-sub">
            {" "}
            Satisfy Your Cravings with Our Delightful Cuisine
          </p>
          <div className="hero-buttons">
            <a href="/cart" children="1" className="hero-btn">Order now</a>
            <a href="/" children="1" className="hero-btn">Join Us</a>

          </div>
        </div>
      </section>
    </div>
  );
}
