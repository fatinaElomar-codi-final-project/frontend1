import React, { useState } from "react";
import "./order.css";
import { useCart } from "../../components/useContext/useContexCart";
import "react-toastify/dist/ReactToastify.css";

import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
const OneOrderCard = (props) => {
  const [quantity, setquantity] = useState(1);
  const [cart, setCart] = useCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };

  const handleAddToCart = () => {
    setCart(...cart, props.product);
  };

  return (
    <div className="order-col-md-4">
      <div className="p-c-bg">
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
          />
        </div>
        <div className="flex-container">
          <div className="ww_100">
            <h2 style={{fontSize:"18px"}}>Categories:  <span style={{color:"red"}}>{props.product.category_id?.name || "uncategorized"}</span></h2>
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

          <a
            className="add-cart"
            href="#"
            onClick={() => {
              setCart([...cart, props.product]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...cart, props.product])
              );
              toast.success("Item Added to cart");
            }}
          >
            <i class="ri-shopping-cart-fill"></i>
          </a>
        </div>
      </div>

      <div className="flex-container-order">
        <h1>Price: {parseFloat(props.product.price) * quantity}</h1>
      </div>
      <div className="flex-container-show" style={{ padding: "20px" }}>
        <Modal
          className="modal-content"
          show={show}
          centered
          style={{
            backgroundColor: "beige",
            display: "block",
            padding: "25px",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 0px 22px rgba(0, 0, 0, 0.3)",

            width: "fit-content", // Set width to fit the content
            height: "auto",
            maxWidth: "90%",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            overflowY: "auto", // Enable vertical scrolling for modal content
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "24px", textAlign: "center" }}>
                {props.product.name}
              </Modal.Title>
            </Modal.Header>
            <button
              className="btn-modal"
              onClick={handleClose}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <i className="fa fa-times" aria-hidden="true"></i>{" "}
              {/* Close icon */}
            </button>
          </div>
          <div className="modelLeft" style={{ display: "flex" }}>
            <div style={{ flex: "40%" }}>
              <img
                className="img-fluid"
                src={`https://restaurant-backend-1.onrender.com${props.product.dishImage}`}
                alt="food"
                //   style={{
                //     maxWidth: "100%",
                //     height:"240px",
                //     borderRadius: "10px",
                //   }

                // }
              />
            </div>
            <div style={{ flex: "60%", marginLeft: "20px" }}>
              <Modal.Body>
                <p style={{ fontSize: "20px", textAlign: "center" }}>
                  {props.product.description}
                </p>
                {/* Add the rating element here */}
                <div style={{ textAlign: "center" }}>
                  <p>Rating: {props.product.rating}</p>
                </div>
              </Modal.Body>
            </div>
          </div>
          <Modal.Footer>
            <button
              className="btn-modal"
              onClick={handleClose}
              style={{ color: "black" }}
            >
              ✗
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default OneOrderCard;
