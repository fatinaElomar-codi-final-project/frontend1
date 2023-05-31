import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Typography,
  Divider,
  Toolbar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,

} from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FoodIcon from "./foodicon";
import OrderIcon from "@mui/icons-material/LocalDining";
import ReservationIcon from "@mui/icons-material/EventSeat";
import AdminIcon from "@mui/icons-material/SupervisorAccount";
import EmployeeIcon from "@mui/icons-material/Group";
import { Box } from "@mui/system";
import Logo from "../../images/logo3.png";
import { useTheme } from "@mui/material/styles";

function Sidebar({ isMenuOpen, handleDrawerToggle, admin }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const SuperAdminDrawerItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/superadmin/dashboard",
    },
    {
      text: "Admins",
      icon: <AdminIcon />,
      path: "/",
    },
    {
      text: "Users",
      icon: <PersonIcon />,
      path: "/",
    },
    {
      text: "Dishes",
      icon: <RestaurantIcon />,
      path: "/dishtable",
    },
    {
      text: "Categories",
      icon: <FoodIcon />,
      path: "/",
    },
    {
      text: "Orders",
      icon: <OrderIcon />,
      path: "/",
    },
    {
      text: "Reservations",
      icon: <ReservationIcon />,
      path: "/",
    },
    {
      text: "Employees",
      icon: <EmployeeIcon />,
      path: "/",
    },
   
  ];

  const AdminDrawerItems = [
    {
      text: "Dishes",
      icon: <RestaurantIcon />,
      path: "/dishtable",
    },
    {
      text: "Categories",
      icon: <FoodIcon />,
      path: "/",
    },
    {
      text: "Orders",
      icon: <OrderIcon />,
      path: "/",
    },
    {
      text: "Reservations",
      icon: <ReservationIcon />,
      path: "/",
    },
    {
      text: "Employees",
      icon: <EmployeeIcon />,
      path: "/dashboard/table",
    },
   
  ];

  // Need to check role of admin
  let sideList =
    user && user.role === "superadmin"
      ? SuperAdminDrawerItems
      : AdminDrawerItems;

  const drawer = (
    <div>
      <Toolbar>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "100px",
              alignSelf: "center",
              margin: "auto",
              padding: "12px",
              gap:"10px",

            }}
          />
        </Link>
      </Toolbar>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "315px",
        }}
      >
        <Box sx={{ marginX: "14px" }}>
          <Typography
            mt={2}
            color="GrayText"
            paddingX="16px"
            paddingY="8px"
          ></Typography>
          {sideList.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={item.path}
              onClick={handleDrawerToggle}
              style={{
                backgroundColor:
                  window.location.pathname === item.path
                    ? "rgba(2, 111, 194, 0.1)"
                    : "",
                color: window.location.pathname === item.path ? "#0D7590" : "",
              }}
            >
              <ListItemIcon
                style={{
                  color:
                    window.location.pathname === item.path ? "#c8a15e" : "",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </Box>
      </List>
    </div>
  );
  const drawerWidth = "318px";
  return (
    <>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          background: "white",
          border: "1px solid rgba(109, 125, 147, 0.15)",
          boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {drawer}
      </Drawer>
     
    </>
  );
}

export default Sidebar;
