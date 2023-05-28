///new dshcard


import React from 'react';
import './cart.css';

const newdishCard = (props) => {
  const { name, src, price } = props.item;

  return (
    <div className="bags_products">
  <div className="single_product">
      <div className="product_img">
        <img className="w_100" src={src} alt="" />
      </div>
      <div className="product_content">
     
        <h6>{name}</h6>
        <div className="d-flex align-items-center justify-content-between">
        <div className="rating_product text-center">
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
        </div>
          <span className="price_product">
          <span>  <h3 style={{color:"beige"}}>price:</h3> {price}</span> <span style={{color:"red",
         
        }}className='shopping_icons'>
            <i className="ri-shopping-cart-fill"></i>
          </span>
          </span>
         
        </div>
      </div>
    </div></div>
  );
};

export default newdishCard;
