import React from "react";
import Sidebar from "../sideBar/sideBar";
import Header from "../header/header";
import { Box } from "@mui/material";

export default function DashboardLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        isMenuOpen={isMenuOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 2,
          p: 3,
          width: `calc(100% - 318px)`,
        }}
      >
        <Header
          isMenuOpen={isMenuOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        {children}
      </Box>
    </Box>
  );
}
