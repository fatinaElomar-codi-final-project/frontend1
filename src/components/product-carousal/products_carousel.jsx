import React, { useEffect } from "react";
import "./productcarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heroimg from "../../images/c1.png";
import Hero1img from "../../images/c2.png";
import Hero3img from "../../images/c3.png";
import Hero2img from "../../images/c4.png";
import Hero4img from "../../images/c5.png";
import Hero5img from "../../images/c6.png";
import Hero6img from "../../images/c7.png";
import Hero7img from "../../images/c8.png";
import Hero8img from "../../images/c9.png";
import Hero9img from "../../images/c10.png";

const productData = [
  {
    image: Heroimg,
    title: "Strawberry cake",
    description: "Description of Product 1",
  },
  {
    image: Hero1img,
    title: "Icecream cake",
    description: "Description of Product 2",
  },
  {
    image: Hero2img,
    title: "chocolat crpe",
    description: "Description of Product 3",
  },
  {
    image: Hero3img,
    title: "Chocolate truffles",
    description: "Description of Product 4",
  },
  {
    image: Hero4img,
    title: "Chocolate ice cream",
    description: "Description of Product 5",
  },
  {
    image: Hero5img,
    title: "brownies",
    description: "Description of Product 6",
  },
  {
    image: Hero6img,
    title: "chip cookies",
    description: "Description of Product 7",
  },
  {
    image: Hero7img,
    title: "pen cake",
    description: "Description of Product 8",
  },
  {
    image: Hero8img,
    title: "Chocolate fondue",
    description: "Description of Product 9",
  },
  {
    image: Hero9img,
    title: "strawberry cheese cake",
    description: "Description of Product 10",
  },
];

export default function ProductCarousel() {
  useEffect(() => {
    // Initialize the slider or add any necessary settings
  }, []);

  const slider1Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel-container" id="services">
      <p className="title-c-product-carousel">Popular Desserts menu</p>
      <Slider {...slider1Settings} className="product-carousel">
        {productData.map((product, index) => (
          <div key={index}>
            <div className="product-c-slide">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="rating" style={{color:"#f1c40f"}}>
  <span>&#9733;</span>
  <span>&#9733;</span>
  <span>&#9733;</span>
  <span>&#9733;</span>
  <span>&#9733;</span>
  <p className="review-c" style={{ color: "red", display: "inline-block", marginLeft: "5px" }}>(3k reviews)</p>
</div>


            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}