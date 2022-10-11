import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";

import { primaryRoutes as routes } from "../..";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(null); // testing

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if(setting === "Logout") {
      Cookies.remove("refresh_token");
      Cookies.remove("access_token");
      window.location.reload()
    }

    setAnchorElUser(null);
  };

  useEffect(() => {
    console.log(Cookies.get('refresh_token'));
  })

  return (
    <AppBar
      position="static"
      elevation={0}
      // sx={{
      //   borderBottom: `1px solid ${theme.palette.divider}`,
      // }}
    >
      <CssBaseline />

      <Container
        maxWidth="false"
        sx={{
          height: props.height,
          position: "fixed",
          backgroundColor: "black",
          zIndex: 1,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SparkDev Project Hub
          </Typography>

          {/* ===== SMALL SCREENS ===== */}
          <IconButton
            size="large"
            aria-label="open appbar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{
              display: { xs: "flex", md: "none" },
              right: 0,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* ===== MEDIUM SCREENS ===== */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                style={{ textDecoration: "none" }}
                tabIndex="-1"
              >
                {({ isActive }) => (
                  <Button
                    color={
                      isActive && window.location.pathname === path 
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>

          {Cookies.get('refresh_token') ? (
            // LOGGED IN
            // Settings drop down when clicked on profile icon
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Avatar" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            // LOGGED OUT
            // <Button>Login</Button>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <NavLink
                key="Login"
                to="/login/"
                style={{ textDecoration: "none" }}
                tabIndex="-1"
              >
                <Button variant="outlined">
                  LOGIN
                </Button>
              </NavLink>
              </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
