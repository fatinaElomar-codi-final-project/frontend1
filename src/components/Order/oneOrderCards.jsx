import React, { useState } from 'react'

const OneOrderCard = (props) => {
  const [ quantity, setquantity] = useState(1)
//   const getCategoryName = (categoryId) => {
//     const category = data.find((category) => category._id === categoryId);
//     return category ? category.name : "";
//   };
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="order-col-md-4" >
    <div className="p-c-bg">
      <h1 className="name-product">{props.product.name}</h1>
      <img
        className="img-fluid"
        src={`http://localhost:8000${props.product.dishImage}`}
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
          <h2>{props.product.category_id?.name||"uncategorized"}</h2>
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
        <p>Prices: {props.product.price}</p>
        <a className="add-cart" href="#">
          <i class="ri-shopping-cart-fill"></i>
        </a>
      </div>
    </div>

    <div className="flex-container-order">
    <h1>Price: {parseFloat(props.product.price) * quantity}</h1>
    </div>
  </div>
  )
}

export default OneOrderCard
