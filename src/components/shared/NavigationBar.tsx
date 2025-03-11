import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { useNavigate } from 'react-router-dom';
import { RoutesVars } from "../../constants/constRoutes";

const NavigationBar = () => {
  const navigate = useNavigate();

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
