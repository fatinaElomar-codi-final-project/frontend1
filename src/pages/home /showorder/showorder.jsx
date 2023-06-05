import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteFilled } from "@ant-design/icons";
import "./showorder.css"; // Import the CSS file for OrdersList

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restaurant-backend-1.onrender.com/order/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setOrders(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`https://restaurant-backend-1.onrender.com/order/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Order was successfully deleted");
          setOrders(orders.filter((order) => order._id !== id));
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          alert("You are not authorized");
        } else {
          alert("Something went wrong.");
        }
        console.error(error);
      });
  };

  return (
    <div>
      <h2>hhhhhhhhh</h2>
      <h2>Orders</h2>
      {orders && orders.length > 0 ? (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
                  <p><span className="brown">order type:</span> {order.ordertype}</p>

               <h3><span className="brown">Name:</span> {order.name}</h3>
    <p><span className="brown">Address:</span> {order.address}</p>
    <p><span className="brown">Table Number:</span> {order.tablenumber}</p>

    <p>
  <span className="brown">Time of Arrival:</span>{' '}
  {order.timearrive && new Date(order.timearrive).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
</p>

    <p><span className="brown">Phone Number:</span> {order.phonenumber}</p>
    <p><span className="brown">Date:</span> {order.date}</p>
    <p>
  <span className="brown">Dishes:</span>
  {order.dishes.split(",").map((dish, index) => (
    <span key={index}>
      {dish.trim()}
      {index !== order.dishes.length - 1 && <br />}
    </span>
  ))}
</p>    <p><span className="brown">Total Amount:</span> {order.total_amount}$</p>
              <DeleteFilled
                className="delete-icon"
                onClick={() => handleDeleteClick(order._id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersList;
