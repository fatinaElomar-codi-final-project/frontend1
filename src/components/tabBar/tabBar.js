import React, { useState, useEffect } from 'react';
import './tabBar.css';
import OrderSvg from '../../images/order.svg';
import Menu from '../../images/menu.svg';
import Home from '../../images/home.svg';
import Reserve from '../../images/reserve.svg';

export default function TabBar() {
  return (
    <div className="container_Tab" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <div className="tabBody">
        <menu className="tabmenu">
          <button className="tabmenu__item active">
            <div className="tabicon-container">
              <img className="tabicon" src={Home} alt="home" />
              <p className="tablabel">Home</p>
            </div>
          </button>
    
          <button className="tabmenu__item">
            <div className="tabicon-container">
              <img className="tabicon" src={OrderSvg} alt="order" />
              <p className="tablabel">Order</p>
            </div>
          </button>
    
          <button className="tabmenu__item">
            <div className="tabicon-container">
              <img className="tabicon" src={Reserve} alt="reserve" />
              <p className="tablabel">Reserve</p>
            </div>
          </button>
    
          <button className="tabmenu__item">
            <div className="tabicon-container">
              <img className="tabicon" src={Menu} alt="menu" />
              <p className="tablabel">Menu</p>
            </div>
          </button>
    
          <div className="tabmenu__border"></div>
        </menu>
      </div>
    </div>
  );
}
