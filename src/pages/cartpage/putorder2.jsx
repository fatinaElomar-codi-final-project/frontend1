import { Modal, Form, Input, message } from "antd";
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
      const response = await axios.post(
        "https://restaurant-backend-1.onrender.com/order/",
        order
      );
      const newOrder = response.data;
      console.log("New order:", newOrder);
      // Handle the new order data
  
      message.success("Order confirmed successfully!");
      onCancel(); // Close the form after confirming the order
    } catch (error) {
      console.error("Error creating order:", error);
      // Show error message
      message.error("Failed to confirm order. Please try again.");
    }
  };
  
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
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

  const validateName = (_, value) => {
    const nameRegex = /^[a-zA-Z\s]+$/; // Regular expression to match only letters and spaces

    if (!nameRegex.test(value)) {
      return Promise.reject("Please enter a valid name");
    }

    return Promise.resolve();
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
          rules={[
            { required: true, message: "Please enter your name" },
            { validator: validateName },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
  name="timeArrive"
  label="Time Arrive"
  rules={[
    {
      required: true,
      pattern: /^(0[89]|1[0-9]|2[0123]):[0-5][0-9]\s(am|pm)$/,
      message: "Please enter a valid time (between 8:00 am and 10:00 pm)",
    },
  ]}
>
  <Input placeholder="Enter the time (e.g., 08:00 am)" />
</Form.Item>

<Form.Item label="Date" name="date" initialValue={getCurrentDate()}>
          <p>{getCurrentDate()}</p>
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
            className="order-btn check-order-btn"
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
