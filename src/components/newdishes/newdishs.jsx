import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newdish.css';
import Dishmenu from "../../images/hero.jpg"

export default function Newdishs() {
  const dishes = [
    {
      name: 'Dish 1',
      image: 'dish1.jpg',
      rating: 4.5
    },
    {
      name: 'Dish 2',
      image: 'dish2.jpg',
      rating: 3.8
    },
    {
      name: 'Dish 2',
      image: 'dish2.jpg',
      rating: 3.8
    }, {
      name: 'Dish 2',
      image: 'dish2.jpg',
      rating: 3.8
    }, {
      name: 'Dish 2',
      image: 'dish2.jpg',
      rating: 3.8
    }, {
      name: 'Dish 2',
      image: 'dish2.jpg',
      rating: 3.8
    }, {
      name: 'Dish 2',
      image: 'dish2.jpg',
      rating: 3.8
    },
    // Add more dish objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust the number of slides to show per row
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => <div className="custom-dots" />,
    appendDots: dots => <ul>{dots}</ul>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  function NextArrow(props) {
    const { onClick } = props;
    return <div className="arrow next-arrow" onClick={onClick} />;
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return <div className="arrow prev-arrow" onClick={onClick} />;
  }

  const renderRatingStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          <FaStar className={i < rating ? 'star filled' : 'star'} />
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h2 className="carousel-heading">New Dishes</h2>
      <Slider {...settings}>
        {dishes.map((dish, index) => (
          <div key={index} className="carousel-item">
            <h3 className="dish-name">{dish.name}</h3>
            <img src={Dishmenu} alt={dish.name} />
            <div className="dish-rating">{renderRatingStars(dish.rating)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
