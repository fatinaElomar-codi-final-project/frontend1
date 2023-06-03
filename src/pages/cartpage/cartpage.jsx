import { Layout, Modal, Form, Input, Select } from "antd";
import React, { useState } from "react";
import "./cartpage.css";
import { useCart } from "../../components/useContext/useContexCart";
import Empty from "../../images/empty.png";

const { Option } = Select;

export default function Cartpage() {
  const [cart, setCart] = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

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

  const totalPrice = () => {
    try {
      let total = 0.0;
      cart?.map((item) => {
        let parsedPrice = item.price.slice(0, item.price.length - 1);
        parsedPrice = parseFloat(parsedPrice);
        total = total + parsedPrice;
      });
      return total.toLocaleString("en-us");
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmOrder = () => {
    setModalVisible(true);
  };

  const handleFormSubmit = (values) => {
    // Save form values to local storage or send a message to the order page
    console.log("Form values:", values);
    // You can save the form values to local storage here
    setModalVisible(false);
  };


  return (
    <>
      <div className="cartcontainerpage">
        <Layout>
          <div className="cart-container-box">
            <div className="row-cart">
              <h2 className="cart-t-title">Delicious Wizard Cart</h2>
              <div className="text-center">
                {cart?.length > 0 ? (
                  `You have ${cart.length} item${cart.length > 1 ? "s" : ""} in your cart`
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
                            <i
                              className="ri-delete-bin-5-fill remove-icon"
                              onClick={() => RemoveCartItem(index)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-3 text content">
                  <h2>Cart summary</h2>
                  <p>Total | Checkout | Payment</p>

<p>Total | Checkout | Payment</p>
                  <hr />
                  <h4>Total: {totalPrice()}$</h4>
                  <button onClick={handleConfirmOrder} className="check-order-btn">
                    Check Order
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-12 text-center">
              <a href="/cart" className="back-to-menu-btn"><i class="ri-book-open-line"></i>
                Back to Menu
              </a>
              <a href="/" className="back-to-home-btn">
              <i class="ri-home-heart-line"></i>
                Home
              </a>
            </div>
          </div>
          </div>
        </Layout>
    <Modal
      title="Order Details"
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={null}
    >
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="orderType"
          label="Order Type"
          rules={[{ required: true, message: "Please select order type" }]}
        >
          <Select>
            <Option value="delivery">Delivery</Option>
            <Option value="takeaway">Takeaway</Option>
            <Option value="restaurant">Inside Restaurant</Option>
          </Select>
        </Form.Item>
        {form.getFieldValue('orderType') === 'restaurant' && (
       <Form.Item
       name="tableNumber"
       label="Table Number"
       rules={[
         {
           required: modalVisible && form.getFieldValue('orderType') === "restaurant",
           message: "Please enter the table number",
         },
       ]}
     >
       <Input placeholder="Enter the table number" />
     </Form.Item>
        )}
        <div className="modal-footer">
          <button type="submit" className="btn-primary">Submit</button>
        </div>
      </Form>
    </Modal>
  </div>
</>
);
}