
// import React, { useState } from "react";
// import axios from "axios";

// import "./order.css";

// const categories = [
//   {
//     name: "Burgers",
//     image: "burger.jpg",
//   },
// ];

// const OrderForm = () => {
//   const [order, setOrder] = useState({
//     type: "",
//     date: "",
//     dishes: "",
//     total_amount: "",
//   });

//   const [foodList, setFoodList] = useState([]);

//   const handleChange = (e) => {
//     const selectedCategory = e.target.value;
//     setOrder({ ...order, type: selectedCategory });

//     // Find the selected category object from the categories array
//     const category = categories.find((category) => category.name === selectedCategory);

//     if (category) {
//       // Set the food list based on the selected category
//       setFoodList(generateFoodList(category.name));
//     }
//   };

//   const generateFoodList = (categoryName) => {
//     // You can implement your own logic here to generate the food list based on the category
//     // For now, let's assume the food list is an array of strings
//     switch (categoryName) {
//       case "Burgers":
//         return ["Cheeseburger", "Veggie Burger", "Chicken Burger"];
//       default:
//         return [];
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("/submitOrder", order);
//       console.log("Order submitted successfully!");
//       // Do something after submitting the order
//     } catch (error) {
//       console.error("Failed to submit order:", error);
//     }
//   };

//   return (
//     <div className="order-form-container">
//       <h1>Order Form</h1>
//       <form className="order-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="type">Type:</label>
//           <select
//             id="type"
//             name="type"
//             value={order.type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select a category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Date:</label>
//           <input
//             type="text"
//             id="date"
//             name="date"
//             value={order.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="dishes">Dishes (comma-separated):</label>
//           <input
//             type="text"
//             id="dishes"
//             name="dishes"
//             value={order.dishes}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="total_amount">Total Amount:</label>
//           <input
//             type="text"
//             id="total_amount"
//             name="total_amount"
//             value={order.total_amount}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {foodList.length > 0 && (
//           <div className="form-group">
//             <label htmlFor="food">Food:</label>
//             <select id="food" name="food" required>
//               <option value="">Select a food</option>
//               {foodList.map((food, index) => (
//                 <option key={index} value={food}>




// User
// continue
// ChatGPT
// jsx
// Copy code
//                 {food}
//               </option>
//             ))}
//             </select>
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/review/");
        setReviews(response.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const renderRatingStars = (rating) => {
    const starCount = Math.round(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: "#ccc", marginRight: "2px" }}
          />
        );
      }
    }

    return stars;
  };

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review) => (
        <div key={review._id}>
          <h3>{review.name}</h3>
          <div>{renderRatingStars(review.rating)}</div>
          <p>Feedback: {review.feedback}</p>
          <p>Product: {review.product_id.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
