import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dishs.dashboard.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DashboardLayout from "../../components/layout_menu/dashboard_header";

function Dish() {
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
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };

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

  function DishForm() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState("");
    const [category1, setCategory1] = useState("");
    const [image, setImage] = useState(null);

    const handleFormSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("type", type);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("count", count);
      formData.append("category", category1);
      formData.append("image", image);

      axios
        .post("http://localhost:8000/dish/add", formData)
        .then((response) => {
          const dish = response.data.response; // Assuming the response contains the saved dish object
          setDish([...dish, dish]);
          resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const resetForm = () => {
      setName("");
      setType("");
      setDescription("");
      setPrice("");
      setCount("");
      setCategory1("");
      setImage(null);
    };

    const handleImageChange = (event) => {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
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
                    <img
                      className="d-d-img"
                      src={`http://localhost:8000${dish.dishImage}`}
                      alt=""
                    />
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
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="type">Type:</label>
              <input
                type="text"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              />

              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <label htmlFor="count">Count:</label>
              <input
                type="text"
                name="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                required
              />

              <label htmlFor="category">Choose Category:</label>
              <select
                name="category"
                value={category1}
                onChange={handleChangeCategory}
                required
              >
                <option value="">Select category...</option>
                {categories.map((category, index) => (
                  <option value={category._id} key={index}>
                    {category.name}
                  </option>
                ))}
              </select>

              <label htmlFor="image">Upload Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* <DashboardLayout /> */}
      <DishForm />
    </div>
  );
}

export default Dish;
