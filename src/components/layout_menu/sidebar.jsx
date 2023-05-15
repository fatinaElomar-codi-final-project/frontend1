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
  Menu as MenuIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  AddBox as AddBoxIcon,
} from "@mui/icons-material";
import QuizIcon from "@mui/icons-material/Quiz";
import BookIcon from "@mui/icons-material/Book";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Box } from "@mui/system";
import Logo from "../../images/logo.png";
import { useTheme } from "@mui/material/styles";

function Sidebar({ isMenuOpen, handleDrawerToggle, admin }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      icon: <SupervisorAccountIcon />,
      path: "/",
    },
    {
      text: "Users",
      icon: <PersonIcon />,
      path: "/",
    },
    {
      text: "Lessons",
      icon: <BookIcon />,
      path: "/s",
    },
    {
      text: "Quizzes",
      icon: <QuizIcon />,
      path: "/",
    },
  ];

  const AdminDrawerItems = [
    {
      text: "Lessons",
      icon: <BookIcon />,
      path: "/",
    },
    {
      text: "Quizzes",
      icon: <QuizIcon />,
      path: "/",
    },
  ];

  //need check role of admin
  // let sideList =
  //   user.role === "superadmin" ? SuperAdminDrawerItems : AdminDrawerItems;

  // const drawer = (
  //   <div>
  //     <Toolbar>
  //       <Link to="/">
  //         <img
  //           src={Logo}
  //           alt="logo"
  //           style={{
  //             height: "100px",
  //             alignSelf: "center",
  //             margin: "auto",
  //             padding: "12px",
  //           }}
  //         />
  //       </Link>
  //     </Toolbar>
  //     <Divider />
  //     <List
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "space-between",
  //         width: "315px",
  //       }}
  //     >
  //       <Box sx={{ marginX: "14px" }}>
  //         <Typography mt={2} color="GrayText" paddingX="16px" paddingY="8px">
  //           User Panel
  //         </Typography>
  //         {sideList.map((item) => (
  //           <ListItem
  //             button
  //             component={Link}
  //             to={item.path}
  //             key={item.path}
  //             onClick={handleDrawerToggle}
  //             style={{
  //               backgroundColor:
  //                 window.location.pathname === item.path
  //                   ? "rgba(2, 111, 194, 0.1)"
  //                   : "",
  //               color: window.location.pathname === item.path ? "#0D7590" : "",
  //             }}
  //           >
  //             <ListItemIcon
  //               style={{
  //                 color:
  //                   window.location.pathname === item.path ? "#0D7590" : "",
  //               }}
  //             >
  //               {item.icon}
  //             </ListItemIcon>
  //             <ListItemText primary={item.text} />
  //           </ListItem>
  //         ))}
  //       </Box>
  //     </List>
  //   </div>
  // );
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
        {/* {drawer} */}
      </Drawer>

      {/* //desktop */}

      {/* <Box
        variant="permanent"
        anchor="left"
        maxWidth="315px"
        sx={{
          background: "white",
          border: "1px solid rgba(109, 125, 147, 0.15)",
          boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
          // position: "fixed",
          // zIndex: "1",
          // top: "0",
          // left: "0",
          // overflowX: "hidden",
          display: ["none", "block"],
          height: "100vh",
        }}
      >
        {drawer}
      </Box> */}
    </>
  );
}
export default Sidebar;
