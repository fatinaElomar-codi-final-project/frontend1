import { Modal, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";

const OrderModal3 = ({ visible, onCancel, onFinish, totalPrice, cart }) => {
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

      // Show success message
      message.success({
        content: "Order confirmed successfully!",
        style: { fontSize: "18px" }, // Increase font size
        onClose: () => onCancel(), // Close form after confirming order
      });
    } catch (error) {
      console.error("Error creating order:", error);
      // Show error message
      message.error("Failed to confirm order. Please try again.");
    }
  };

  const handleCreateOrder = () => {
    form.validateFields().then((values) => {
      const order = {
        name: values.name,
        ordertype: "delivery",
        tablenumber: values.tableNumber,
        timearrive: "",
        phonenumber: values.phoneNumber,
        date: values.date,
        dishes: cart.map((product) => `${product.name} ${product.price}`).join(", "),
        total_amount: totalPrice,
      };
      createOrder(order);
    });
  };
  
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
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
          name="tableNumber"
          label="Table Number"
          rules={[{ required: true, message: "Please enter the table number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              pattern: /^\d{2}\/\d{6}$/,
              message: "Please enter a valid phone number (00/000000)",
            },
          ]}
        >
          <Input placeholder="Enter the phone number (00/000000)" />
        </Form.Item>
        <Form.Item label="Date" name="date" initialValue={getCurrentDate()}>
          <p>{getCurrentDate()}</p>
        </Form.Item>
        <Form.Item>
          <h3>Order Summary:</h3>
          <p>Dishes: {cart.map((product) => product.name).join(", ")}</p>
          <p>Total Amount: {totalPrice}$</p>
        </Form.Item>
        <Form.Item>
          <button type="submit" className="order-btn check-order-btn" onClick={handleCreateOrder}>
            Confirm Order
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OrderModal3;
