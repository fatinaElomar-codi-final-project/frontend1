import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import DashboardLayout from "../../../components/layout/dashboardLayout";
import axios from "axios";
import AddresourcesButton from "./dashboard";

function Tables() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (row) => {
    setEditingData(row);
    console.log(row);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setEditingData({});
  };

  const handleEditDialogSave = (id) => {
    // handle save logic here
    axios
      .put(`https://restaurant-backend-1.onrender.com/dish/${id}`, editingData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response);
        if (response.status === 200) {
          alert("user's info has been edited successfully");
        }
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("Email already taken, please use a different email.");
        }
        if (error.response && error.response.status === 403) {
          alert("you are not authorized");
        } else {
          alert("Something went wrong. Please try to change something.");
        }
      });

    setEditDialogOpen(false);
    setEditingData({});
  };

  const handleDeleteClick = (id) => {
    // handle delete logic here
    axios
      .delete(`https://restaurant-backend-1.onrender.com/dish/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response);
        if (response.status === 200) {
          alert("user was successfully deleted");
          fetching();
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          alert("you are not authorized");
        } else {
          alert("Something went wrong.");
        }
        // Handle error response
        console.error(error);
      });
  };




  const fetching = () => {
    axios
      .get("https://restaurant-backend-1.onrender.com/dish", {
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

  }
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="dishhh" style={{ marginLeft: "331px" }}>
      {/* <DashboardLayout> */}
      <TableContainer component={Paper} sx={{ width: "98%", margin: "auto" }}>
        <Table>
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Type{" "}
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                price{" "}
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                count{" "}
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Category{" "}
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Image{" "}
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>{row.category_id.name}</TableCell>
                  <TableCell>
                  <img src={`https://restaurant-backend-1.onrender.com${row.dishImage}`} alt="dish" style={{width:"100px"}}/>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditClick(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(row._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 0,
            padding: 0,
          }}
        >
          <AddresourcesButton />
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </TableContainer>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the user's information, please update the fields below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            fullWidth
            value={editingData.first_name || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, first_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            fullWidth
            value={editingData.last_name || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, last_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            value={editingData.phone || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, phone: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={editingData.email || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Role"
            type="text"
            fullWidth
            value={editingData.role || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, role: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={() => handleEditDialogSave(editingData._id)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* </DashboardLayout> */}
    </div>
  );
}
export default Tables;
