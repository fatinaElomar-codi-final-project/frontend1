import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./sidebar";
import BasicTextFields from "./header";

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
        <BasicTextFields
          isMenuOpen={isMenuOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        {children}
      </Box>
    </Box>
  );
}
