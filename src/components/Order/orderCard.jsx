import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom"; 
import "./order.css";
import OneOrderCard from "./oneOrderCards";

export default function OrderCard() {
  const [data1, setData1] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {
    axios
      .get("https://restaurant-backend-1.onrender.com/dish/", {
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

  const getFilteredProducts = () => {
    let products = [...data1]; // Change 'data' to 'data1'
  
    if (selectedCategory !== "") {
      products = products.filter(
        (product) => product.category_id.name  === selectedCategory
      );
    }
    console.log(products);
    
    return products; // Return the filtered products
  };

  const filteredProducts = getFilteredProducts(); // Call the function to get filtered products

  return (
    <div>
      <h5 className="cart-title1">Our Menu</h5>
      <h1 className="cart-title2">Thousand of meals for all tastes</h1>
      <div className="searchbar">
        <div className="food-c-category">
      <div className="dishesFood">
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("")}
        >
          All
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Drinks")}
        >
          🍹 Drinks
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Burgers")}
        >
          🍔 Burgers
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Chicken")}
        >
          🍗 Chicken
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Pizza")}
        >
          🍕 Pizza
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Fish and Seafood")}
        >
          🦞 Fish and Seafood
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Salads")}
        >
          🥗 Salads
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Desserts")}
        >
         🍰 Desserts
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Coffee and Tea")}
        >
          ☕️ Coffee and Tea
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Smoothies and Shakes")}
        >
         🥭 Smoothies and Shakes
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Ice Cream")}
        >
         🍨 Ice Cream
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("Breakfast")}
        >
         🥐 Breakfast
        </NavLink>
        <NavLink
          className="Navlink-cart"
          activeClassName="active"
          onClick={() => setSelectedCategory("kids meals")}
        >
         🍱 kids meals
        </NavLink>
      </div>
    </div>
      <div className="row-order">
        {filteredProducts.map((product, index) => (
          <OneOrderCard product={product} index={index} key={index} />
        ))}
      </div></div>
    </div>
  );
}
