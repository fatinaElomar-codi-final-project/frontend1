import React from "react";
import "./server.css";
import Reserve from "../../images/reservee.png";
import Order from "../../images/ordeer.png";
import Menu from "../../images/wifi.png";
import Serve from "../../images/chef.png";

export default function Server() {
  return (
    <div>
      <h1 className="icons-main-title">Check Our Services</h1>
      <div className="server-container">
        <div className="icons-container">
          <div className="icon-content">
            <img className="icons-img" src={Reserve} alt="reservation" />

            <div className="icon-TITLE">Reservation</div>
            <div className="icon-description">Fast and easy reservation</div>
          </div>
          <div className="icon-content">
            <img className="icons-img" src={Order} alt="reservation" />

            <div className="icon-TITLE">Order</div>
            <div className="icon-description">Fast and easy reservation</div>
          </div>
          <div className="icon-content">
            <img className="icons-img" src={Menu} alt="reservation" />
            <div className="icon-TITLE">Free Wifi</div>
            <div className="icon-description">Fast and easy reservation</div>
          </div>
          <div className="icon-content">
            <img className="icons-img" src={Serve} alt="reservation" />

            <div className="icon-TITLE">Fresh Food</div>
            <div className="icon-description">Fast and easy reservation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
