import React, { useEffect, useState } from "react";
import axios from "axios";
import "./order.css";
export default function OrderCard(product) {
  const [data1, setData1] = useState([]);

  const [data, setData] = useState([]);
  const [ quantity, setquantity] = useState(1)

  useEffect(() => {
    axios
      .get("http://localhost:8000/category/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // ////////////////////////////////////////
  useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData1(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  ///////////////////////////////////
  const getCategoryName = (categoryId) => {
    const category = data.find((category) => category._id === categoryId);
    return category ? category.name : "";
  };
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="searchbar">
        <select><optinion>hhhh</optinion></select>
        
        </div>
        <div className="row-order">
  {data1.map((product, index) => (
    <div className="order-col-md-4" key={index}>
      <div className="p-c-bg">
        <h1 className="name-product">{product.name}</h1>
        <img
          className="img-fluid"
          src={`http://localhost:8000${product.dishImage}`}
          alt="food"
          style={{
            height: "150px",
            width: "200px",
            borderRadius: "10px",
          }}
        />
        <div className="flex-container">
          <div className="ww_100">
            <p>Categories:</p>
            <select
              name={`category-${index}`}
              value={data}
              onChange={handleChangeCategory}
              required
            >
              <option value="">Select category...</option>
              {data.map((category, i) => (
                <option value={category._id} key={i}>
                  {category.name}
                </option>
              ))}
            </select>
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
          <p>Prices: {product.price}</p>
          <a className="add-cart" href="#">
            <i class="ri-shopping-cart-fill"></i>
          </a>
        </div>
      </div>

      <div className="flex-container-order">
      <h1>Price: {parseFloat(product.price) * quantity}</h1>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
