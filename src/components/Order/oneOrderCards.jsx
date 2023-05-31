import React, { useState } from 'react'
import"./order.css"
import {Modal } from "react-bootstrap";
const OneOrderCard = (props) => {
  const [ quantity, setquantity] = useState(1)
  const [show, setShow] = useState(false);
  const handleClose= () => setShow(false);
  const handleShow =() => setShow (true);
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="order-col-md-4" >
    <div className="p-c-bg" >
      <div className="show-card" onClick={handleShow}>
      <h1 className="name-product">{props.product.name}</h1>
      <img
        className="img-fluid"
        src={`https://restaurant-backend-1.onrender.com${props.product.dishImage}`}
        alt="food"
        style={{
          height: "150px",
          width: "200px",
          borderRadius: "10px",
        }}
      /></div>
      <div className="flex-container">
        <div className="ww_100">
          <p>Categories:</p>
          <h2>{props.product.category_id?.name||"uncategorized"}</h2>
        </div>
        <div className="quantity">
          quantity:
          <select
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="cart-btn">
        <p>Prices: {props.product.price}</p>
        <a className="add-cart" href="#">
          <i class="ri-shopping-cart-fill"></i>
        </a>
      </div>
    </div>

    <div className="flex-container-order">
    <h1>Price: {parseFloat(props.product.price) * quantity}</h1>
    </div>
<div className="flex-container-show">
    <Modal show={show} centered style={{ backgroundColor: "beige",border:"2px solid black", display: "flex", alignItems: "center", justifyContent: "center" ,zIndex:"999",width:"200px"}}>
  <Modal.Header closeButton>
    <Modal.Title>{props.product.name}</Modal.Title>
  </Modal.Header>
  <img
        className="img-fluid"
        src={`https://restaurant-backend-1.onrender.com${props.product.dishImage}`}
        alt="food"
        style={{
          height: "100px",
          width: "150px",
          borderRadius: "10px",
        }}
      />
  <Modal.Body>
    <p style={{fontSize:"20px"}}>{props.product.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button className="btn" onClick={handleClose} >Close</button>
  </Modal.Footer>
</Modal>
</div>

  </div>
  )
}

export default OneOrderCard
