import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Menu.css";
import Back from "../../images/back.jpg";
import Logo from "../../images/order.svg";
import Logo2 from "../../images/logo1.png";
import Dish from "../../images/login.webp";
import axios from "axios";

export default function Menupage() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handleSlideChange = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1, // Start from slide 2
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };
  

  const renderSlideButtons = () => {
    return data.map((data3, index) => (
      <button
        key={index}
        className={`slider-button ${currentSlide === index ? "active" : ""}`}
        onClick={() => handleSlideChange(index)}
      >
        {data3.name}
      </button>
    ));
  };
  

  return (
    <div className="fullscreen">
      <section className="menu">
        <Slider {...sliderSettings} className="menu-carousel" ref={sliderRef}>
          <div className="menu-container-back">
            <div
              className="menu-slide"
              style={{ backgroundImage: `url(${Back})` }}
            >
              <div className="logo2">
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className="menu-title">
                Menu<span className="menu-span">Restaurant</span>
              </p>
              <p className="menu-subtitle">Choose your best food</p>
              <p className="menu-swipe">Swipe the screen to move</p>
            </div>
          </div>
          {data.map((data3, index) => (
          <div
            key={index}
            className="menu-slide"
            style={{ backgroundImage: `url(${Back})` }}
          >
            <div className="menu-content2">
              <img
                className="logo-menu2"
                src={`http://localhost:8000${data3.CategoryImage}`}
                alt="category"
              />
              <p className="menu-category-title">{data3.name}</p>
            </div>
            <div className="menu-dish">
              <h1>{data3.dishName}</h1>
              <p>{data3.type}</p>

              <h1>{data3.dishName}</h1>
              <p>{data3.type}</p>
              <p>{data3.description}</p>
              <p>{data3.price}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="menu-slider-buttons">
        {renderSlideButtons()}
      </div>
    </section>
    </div>
  );
}