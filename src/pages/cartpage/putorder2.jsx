import { Modal, Form, Input } from "antd";
import axios from "axios";
import React from "react";

const OrderModal1 = ({ visible, onCancel, onFinish, totalPrice, cart }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    form.resetFields();
    onFinish(values);
  };

  const createOrder = async (order) => {
    try {
      const response = await axios.post("https://restaurant-backend-1.onrender.com/order/", order);
      const newOrder = response.data;
      console.log("New order:", newOrder);
      // Handle the new order data
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleCreateOrder = () => {
    form.validateFields().then((values) => {
      const order = {
        name: values.name,
        ordertype: values.orderType || "takeaway", // Default value is takeaway if orderType is not provided
        tablenumber: "",
        timearrive: values.timeArrive,
        phonenumber: values.phoneNumber,
        date: values.date,
        dishes: cart.map((product) => `${product.name} ${product.price}`).join(", "),
        total_amount: totalPrice,
      };
      createOrder(order);
    });
  };

  return (
    <Modal
      title="Order Details"
      visible={visible}
      onCancel={onCancel}
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
          name="timeArrive"
          label="Time Arrive"
          rules={[
            {
              required: true,
              pattern: /^\d{2}:\d{2}\s(am|pm)$/,
              message: "Please enter a valid time (00:00 am/pm)",
            },
          ]}
        >
          <Input placeholder="Enter the time (00:00 am/pm)" />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              pattern: /^\d{2}\/\d{2}\/\d{4}$/,
              message: "Please enter a valid date (dd/mm/yyyy)",
            },
          ]}
        >
          <Input placeholder="Enter the date (dd/mm/yyyy)" />
        </Form.Item>
        <Form.Item>
          <h3>Order Summary:</h3>
          <p>
            <span className="brown">Dishes:</span>
            {cart.map((product) => (
              <div key={product.name}>
                {product.name} {product.price}
              </div>
            ))}
          </p>
          <p>Total Amount: {totalPrice}$</p>
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            className="order-btn"
            onClick={handleCreateOrder}
          >
            Confirm Order
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OrderModal1;
