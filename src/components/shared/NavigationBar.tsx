import React, { useState } from "react";
import { AppBar, Button, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { useNavigate } from 'react-router-dom';

import { RoutesVars } from "../../constants/constRoutes";

const pages = [{ id: '1', name: 'Symulacja Błędu', route: RoutesVars.ERROR_SIMULATION }];

const NavigationBar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = (route: string) => { setAnchorElNav(null); navigate(route); };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MonitorHeartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate(RoutesVars.HOME)}
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: 'pointer'
            }}
          >
            System Monitorowania i Sterowania
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left", }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left", }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handleCloseNavMenu(page.route)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <MonitorHeartIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate(RoutesVars.HOME)}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: 'pointer'
            }}
          >
            System Monitorowania i Sterowania
          </Typography>
          <Box sx={{ flexGrow: 1, mr: 3, display: { xs: "none", md: "flex", justifyContent: "flex-end" }, }}>
            {pages.map((page) => (
              <Button key={page.id} onClick={() => handleCloseNavMenu(page.route)} sx={{ my: 2, color: "white", display: "block" }}>
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
