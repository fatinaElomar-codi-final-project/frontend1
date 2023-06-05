import { Layout } from "antd";
import React, { useState } from "react";
import "./cartpage.css";
import { useCart } from "../../components/useContext/useContexCart";
import Empty from "../../images/empty.png";
import OrderModal from "./putorder";
import OrderModal1 from "./putorder2";
import OrderModal3 from "./putorder3";

export default function Cartpage() {
  const [cart, setCart] = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const RemoveCartItem = (index) => {
    try {
      let myCart = [...cart];
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = () => {
    try {
      let total = 0.0;
      cart?.forEach((item) => {
        let parsedPrice = item.price.slice(0, item.price.length - 1);
        parsedPrice = parseFloat(parsedPrice);
        total += parsedPrice * item.quantity;
      });
      return total.toLocaleString("en-us");
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmOrder = () => {
    setModalVisible(true);
  };

  const handleConfirmOrder1 = () => {
    setModalVisible1(true);
  };

  const handleConfirmOrder3 = () => {
    setModalVisible3(true);
  };

  const handleFormSubmit = (values) => {
    // Save form values to local storage or send a message to the order page
    console.log("Form values:", values);
    // You can save the form values to local storage here
    setModalVisible(false);
    setModalVisible1(false);
  };

  return (
    <>
      <div className="cartcontainerpage">
        <div className="row">
          <div className="col-md-12 text-center  row-c-btn">
            <a href="/cart" className="back-to-menu-btn">
              <i className="ri-book-open-line"></i>
              Back to Menu
            </a>
            <h2 className="cart-t-title">Delicious Wizard Cart</h2>

            <a href="/" className="back-to-home-btn">
              <i className="ri-home-heart-line"></i>
              Home
            </a>
          </div>
        </div>
        <Layout>
          <div className="cart-container-box">
            <div className="row-cart">
              <div className="text-t">
                {cart?.length > 0 ? (
                  `You have ${cart.length} item${
                    cart.length > 1 ? "s" : ""
                  } in your cart`
                ) : (
                  <div>
                    <p>Your cart is empty</p>
                    <img src={Empty} alt="Empty cart" />
                  </div>
                )}
              </div>

              <div className="item-c-row">
                <div className="col-md-9">
                  <h3>Cart Item</h3>
                  <div className="row-item-cart">
{cart?.map((product, index) => (
  <div className="row-item-cart" key={index}>
    <div className="col-md-8"></div>
    <div className="col-md-4 cartt-detail">
      <div>
        <img
          className="img-fluid"
          src={`https://restaurant-backend-1.onrender.com${product.dishImage}`}
          alt="food"
          style={{
            height: "99px",
            width: "126px",
            borderRadius: "20px",
          }}
        />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description.substring(0, 20)}</p>
        <p>{product.price}</p>
      </div>
      <div>
        <select
          className="quantity-p"
          value={product.quantity}
          onChange={(e) =>
            handleQuantityChange(index, parseInt(e.target.value))
          }
          style={{
            width: "100px",
            border: "none",
            margin: "10px"
          }}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Total Price: {parseFloat(product.price.slice(0, -1)) * product.quantity}$</p>
        <i
          className="ri-delete-bin-5-fill remove-icon"
          onClick={() => RemoveCartItem(index)}
        ></i>
      </div>
    </div>
  </div>
))}
</div>                </div>
                <div className="col-md-3 text content">
                  <h2>Cart summary</h2>
                  <p>Total | Checkout | Payment</p>
                  <hr />
                  <h4>Total: {totalPrice()}$</h4>
                  <hr />
                  Order Type:
                  <div className="order-type-buttons">
                    <button
                      onClick={handleConfirmOrder}
                      className="check-order-btn"
                    >
                      Delivery
                    </button>
                    <button
                      onClick={handleConfirmOrder1}
                      className="check-order-btn"
                    >
                      TakeAway{" "}
                    </button>
                    <button
                      onClick={handleConfirmOrder3}
                      className="check-order-btn"
                    >
                      At restaurant{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <OrderModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onFinish={handleFormSubmit}
        totalPrice={totalPrice()}
        cart={cart}
      />
      <OrderModal1
        visible={modalVisible1}
        onCancel={() => setModalVisible1(false)}
        onFinish={handleFormSubmit}
        totalPrice={totalPrice()}
        cart={cart}
      />
      <OrderModal3
        visible={modalVisible3}
        onCancel={() => setModalVisible3(false)}
        onFinish={handleFormSubmit}
        totalPrice={totalPrice()}
        cart={cart}
      />
    </>
  );
}
