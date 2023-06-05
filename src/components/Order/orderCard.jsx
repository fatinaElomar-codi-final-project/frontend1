import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./order.css";
import OneOrderCard from "./oneOrderCards";

export default function OrderCard() {
  const [data1, setData1] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMobile, setIsMobile] = useState(false);

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
    let products = [...data1];

    if (selectedCategory !== "") {
      products = products.filter(
        (product) => product.category_id.name === selectedCategory
      );
    }
    console.log(products);

    return products;
  };

  const filteredProducts = getFilteredProducts();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const categories = [
    { label: "All", value: "" },
    { label: "🍹 Drinks", value: "Drinks" },
    { label: "🍔 Burgers", value: "Burgers" },
    { label: "🍗 Chicken", value: "Chicken" },
    { label: "🍕 Pizza", value: "Pizza" },
    { label: "🦞 Fish and Seafood", value: "Fish and Seafood" },
    { label: "🥗 Salads", value: "Salads" },
    { label: "🍰 Desserts", value: "Desserts" },
    { label: "☕️ Coffee and Tea", value: "Coffee and Tea" },
    { label: "🥭 Smoothies and Shakes", value: "Smoothies and Shakes" },
    { label: "🍨 Ice Cream", value: "Ice Cream" },
    { label: "🥐 Breakfast", value: "Breakfast" },
    { label: "🍱 Kids Meals", value: "Kids Meals" },
  ];

  return (
    <div>
      <h5 className="cart-title1">Our Menu</h5>
      <h1 className="cart-title2">Thousand of meals for all tastes</h1>
      <div className="searchbar">
        <div className="food-c-category">
          <div className="dishesFood">
            {isMobile ? (
              <select
                className="category-select"
                value={selectedCategory}
                onChange={handleSelectChange}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            ) : (
              <div className="dishesFood">
                {/* <div className="Navlink-cart" onClick={() => setSelectedCategory("")}>
                  All
                </div> */}
                {categories.map((category) => (
                  <NavLink
                    className="Navlink-cart"
                    activeClassName="active"
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="row-order">
          {filteredProducts.map((product, index) => (
            <OneOrderCard product={product} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}