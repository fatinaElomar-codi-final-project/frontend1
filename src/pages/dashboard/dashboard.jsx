import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { DialogActions } from "@mui/material";
import axios from "axios";

const AddresourcesButton = () => {
  const [open, setOpen] = useState(false);
  const [Category, setCategory] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    count: "",
    category_id: "",
    dishImage: null,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "dishImage") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
      console.log("Selected image:", files[0]);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("name", formData.name);
    postData.append("type", formData.type);
    postData.append("description", formData.description);
    postData.append("price", parseFloat(formData.price).toString()); // Parse and convert to string
    postData.append("count", formData.count);
    postData.append("category_id", formData.category_id);
    postData.append("image", formData.dishImage);
  
   axios
    .post("https://restaurant-backend-1.onrender.com/dish/add", postData)
    .then((response) => {
      console.log(response);
      setFormData({
        name: "",
        type: "",
        description: "",
        price: "",
        count: "",
        category_id: "",
        image: null,
      });
      handleClose();
      alert("Successfully added the dish!");
    })
    .catch((error) => {
      console.error(error);
      if (error.response && error.response.status === 409) {
        alert("Price already taken, please use a different price.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
};
  

  useEffect(() => {
    axios
      .get("https://restaurant-backend-1.onrender.com/category/", {
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

  const handleChangeCategory = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      category_id: value,
    }));
    console.log("Selected category ID:", value);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<Add />}
        sx={{
          m: 2,
          backgroundColor: "black",
          ":hover": {
            boxShadow: "0px 0px 0px 1px #0D7590",
            backgroundColor: "white",
            color: "#0D7590",
          },
        }}
      >
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Admin</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please fill in the form below to add a new Admin.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="type"
            label="Type"
            type="text"
            fullWidth
            required
            value={formData.type}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            required
            value={formData.description}
            onChange={handleInputChange}
          />
         <TextField
  margin="dense"
  name="price"
  label="Price"
  type="text" // Update input type to "number"
  fullWidth
  required
  value={formData.price}
  onChange={handleInputChange}
/>

          
          <TextField
            margin="dense"
            name="count"
            label="Count"
            type="text"
            fullWidth
            required
            value={formData.count}
            onChange={handleInputChange}
          />
          <Select
            name="category_id"
            value={formData.category_id}
            onChange={handleChangeCategory}
            required
          >
            <MenuItem value="">Select category...</MenuItem>
            {Category.map((category) => (
              <MenuItem value={category._id} key={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
          <input
            type="file"
            margin="dense"
            name="image"
            fullWidth
            required
            accept="image/*, .pdf, .doc, .docx"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddresourcesButton;