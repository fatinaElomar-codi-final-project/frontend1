import React, { useEffect, useState } from 'react';
import './dishes.css';
import axios from 'axios';

export default function DishCard() {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setDishes(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/category/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setCategories(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.name : "";
  };

  const renderCards = () => {
    const rows = [];
    let row = [];
    dishes.forEach((dish, index) => {
      row.push(
        <div className="widget" key={index}>
          <div
            className="widget__photo"
            style={{
              background: `url("http://localhost:8000${dish.dishImage}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="widget__button">buy</div>
          <div className="widget__details">
            <div className="widget__badges">
              <div className="widget__badge widget__badge--rating">{dish.price}</div>
            </div>
            <div className="widget__name">{dish.name}</div>
            <div className="widget__type">{dish.type}</div>
            <div className="widget__info">
              <span></span>
            </div>
            <div className="widget__hidden">
              <hr />
              <table className="widget__table">
                <tbody>
                  <tr>
                    <td>Ingridient : </td>
                    <td>{dish.description}</td>
                  </tr>
                  <tr>
                    <td>Category: </td>
                    <td>{getCategoryName(dish.category_id)}</td>
                  </tr>
                  <tr>
                    <td>Credit-cards</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Wi-Fi</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Outdoor Seating</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

      // Check if row is full or it's the last dish
      if ((index + 1) % 4 === 0 || index === dishes.length - 1) {
        rows.push(<div className="row" key={index}>{row}</div>);
        row = [];
      }
    });

    return rows;
  };

  return <div className="wrapper">{renderCards()}</div>;
}
