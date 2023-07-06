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
      const response = await axios.get(
        "https://restaurant-backend-1.onrender.com/order/",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
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
  ////////
  const getProcessedDishes = (order) => {
    const dishCounts = {};
    const dishes = order.dishes.split(",");
  
    dishes.forEach((dish) => {
      const trimmedDish = dish.trim();
      const [name, price] = trimmedDish.split("-");
      dishCounts[name] = dishCounts[name] || { count: 0, price: 0 };
      dishCounts[name].count += 1;
      dishCounts[name].price += parseFloat(price);
    });
  
    return dishCounts;
  };
  return (
    <div>
      <h2>Orders</h2>
      {orders && orders.length > 0 ? (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <table className="order-table">
                <tbody>
                  <tr>
                    <td>
                      <span className="brown">Order type:</span>
                    </td>
                    <td>{order.ordertype}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="brown">Name:</span>
                    </td>
                    <td>{order.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="brown">Address:</span>
                    </td>
                    <td>{order.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="brown">Table Number:</span>
                    </td>
                    <td>{order.tablenumber}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="brown">Time of Arrival:</span>
                    </td>
                    <td>
                      {order.timearrive &&
                        new Date(order.timearrive).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="brown">Phone Number:</span>
                    </td>
                    <td>{order.phonenumber}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="brown">Date:</span>
                    </td>
                    <td>{order.date}</td>
                  </tr>
        
<tr>
  <td>
    <span className="brown">Dishes:</span>
  </td>
  <td>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          {/* <th>Price</th> */}
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(getProcessedDishes(order)).map(([dish, { count }]) => (
  <tr key={dish}>
    <td>{dish}</td>
    <td>{count}</td>
  </tr>
))}
      
      </tbody>
    </table>
  </td>
</tr>

                  <tr>
                    {/* <td>
                      <span className="brown"></span>
                    </td> */}
                    <td>
                      <span className="brown">Total Amount:</span>
                    </td>
                    <td>{order.total_amount}$</td>
                  </tr>
                </tbody>
              </table>
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
