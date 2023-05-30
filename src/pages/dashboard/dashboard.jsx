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
import { Add, CloudUpload } from "@mui/icons-material";
import { DialogActions } from "@mui/material";
import axios from "axios";
import { Input, InputAdornment, IconButton } from "@mui/material";

const AddresourcesButton = () => {
  const [open, setOpen] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [Category, setCategory] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    count: "",
    category_id: "",
    image: "",
  });

  const handleClickShowMedia = () => {
    setShowMedia(!showMedia);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleAddClick = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/dish/add", formData)
      .then((response) => {
        console.log(response);
        setFormData({
          name: "",
          type: "",
          description: "",
          price: "",
          count: "",
          category_id: "",
          image: "",
        });
        handleClose();
      })
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("Price already taken, please use a different price.");
        } else {
          alert("Something went wrong. Please try to change the price.");
        }
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
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

  // const getCategoryName = (categoryId) => {
  //   const category = Category.find((cat) => cat._id === categoryId);
  //   return category ? category.name : "";
  // };
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
          <DialogContentText>Please fill in the form below to add a new Admin.</DialogContentText>
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
         type="text"
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
  <select
       name="category"
                onChange={handleChangeCategory}
                required
              >
                <option value="">Select category...</option>
                {Category.map((category, index) => (
                  <option value={category._id} key={index}>
                    {category.name}
                  </option>
                ))}
              </select>
<Input
margin="dense"
name="image"
type="file"
fullWidth
required
inputProps={{ accept: "image/*, .pdf, .doc, .docx" }}
onChange={handleClickShowMedia}
endAdornment={
<InputAdornment position="end">
<IconButton>
<CloudUpload />
</IconButton>
</InputAdornment>
}
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
export default AddresourcesButton