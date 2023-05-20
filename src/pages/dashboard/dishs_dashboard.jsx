import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dishs.dashboard.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DashboardLayout from "../.././components/layout_menu/dashboard_header";
export default function Dish() {
  const [dish, setDish] = useState([]);
  const [categories, setCategory] = useState([]);
  const [showForm, setShowForm] = useState(false);

  
  useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setDish(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setCategory(response.data.response);
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

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // ...

    // Reset the form and hide it
    setShowForm(false);
  };

  return (
    <div className="dish-container">
      <div className="tablebody">
        <label htmlFor="addDish" className="add-button-label">
          Add Dish
        </label>
        <IconButton id="addDish" onClick={handleAddButtonClick}>
          <AddIcon />
        </IconButton>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Price</th>
              <th>Count</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dish.map((dish, index) => (
              <tr key={index}>
                <td>{dish.name}</td>
                <td>{dish.type}</td>
                <td>{dish.description}</td>
                <td>{dish.price}</td>
                <td>{dish.count}</td>
                <td>{getCategoryName(dish.category_id)}</td>
                <td>
                  <img src={`http://localhost:8000${dish.dishImage}`} alt="" />
                </td>
                <td>
                  <EditIcon className="edit-icon" />
                  <DeleteIcon className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="form-container">
          <div className="close-icon" onClick={() => setShowForm(false)}>
            <CloseIcon />
          </div>
          <form className="dish-form" onSubmit={handleFormSubmit}>
            <div className="close-icon" onClick={() => setShowForm(false)}>
              <CloseIcon />
            </div>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required />

            <label htmlFor="type">Type:</label>
            <input type="text" name="type" required />

            <label htmlFor="description">Description:</label>
            <textarea name="description" required></textarea>

            <label htmlFor="price">Price:</label>
            <input type="text" name="price" required />

            <label htmlFor="count">Count:</label>
            <input type="text" name="count" required />

            <label htmlFor="category">Choose Category:</label>
            <select name="category" required>
              <option value="">Select category...</option>
              {categories.map((category, index) => (
                <option value={category.name} key={index}>
                  {category.name}
                </option>
              ))}
            </select>

            <label htmlFor="image">Upload Image:</label>
            <input type="file" name="image" accept="image/*" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
