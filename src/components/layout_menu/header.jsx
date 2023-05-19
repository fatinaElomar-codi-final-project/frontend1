import * as React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Help from "@mui/icons-material/HelpOutlineOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import Logout from "@mui/icons-material/Logout";
import Profile from "@mui/icons-material/PersonOutlineOutlined";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Notification from "./notify";


export default function BasicTextFields({
  title = "Dashboard",
  userName = "test name",
  isMenuOpen,
  handleDrawerToggle,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const removeData = () => {
    localStorage.removeItem("user");
    navigate("/adminpanel");
  };
  const navigateHelp = () => {
    navigate("/help");
  };
  return (
    <>
      <Box sx={styles.Header_container}>
        <Stack sx={styles.Stack} direction="row">
          <Stack direction="row" spacing={2}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: ["block", "none"] }}
            >
              <MenuIcon />
            </IconButton>
            <h1>{title}</h1>
          </Stack>
          <aside style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Notification />
            <IconButton
              onClick={handleClick}
              size="large"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Profile sx={styles.profile} />
            </IconButton>
          </aside>
        </Stack>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: styles.menu,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
        <Box sx={{ width: "250px", height: "240px" }}>
  <Profile />
</Box>
        </MenuItem>
    
        <MenuItem onClick={() => navigateHelp()}>
          <ListItemIcon>
            <Help fontSize="small" />
          </ListItemIcon>
          Help
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            removeData();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

const styles = {
  Header_container: {
    width: "100%",
    height: "80px",
  },

  Stack: {
    paddingY: "10px",

    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
  profile: {
    width: 30,
    height: 30,
    color: "grey.700",
  },
};