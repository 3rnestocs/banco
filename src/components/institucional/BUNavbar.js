import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/banco_logo.png";
import { Button, AppBar, Toolbar, IconButton, Container, Box } from "@mui/material";
import BUButton from "../BUButton";

const BUNavbar = ({ serviciosRef, identidadRef, contactoRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", width: "100%", boxShadow: "none" }}
    >
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Ensure space between logo and nav items
            width: "100%",
          }}
        >
          {/* Logo aligned to the left */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <a href="#" style={{ display: "flex", alignItems: "center" }}>
              <IconButton edge="start" color="inherit" aria-label="logo">
                <img id="img-logo" width="auto" src={logo} height={42} alt="Logo" />
              </IconButton>
            </a>
          </Box>
  
          {/* Tabs and buttons aligned to the right */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                padding: 0,
                margin: 0,
                alignItems: "center", // Align items vertically in the center
              }}
            >
              <li className="nav-item custom-nav-item">
                <Button onClick={() => handleScroll(serviciosRef)}>Servicios</Button>
              </li>
              <li className="nav-item custom-nav-item">
                <Button onClick={() => handleScroll(identidadRef)}>Conócenos</Button>
              </li>
              <li className="nav-item custom-nav-item">
                <Button onClick={() => handleScroll(contactoRef)}>Contacto</Button>
              </li>
            </ul>
            <Link to="/login" style={{ marginLeft: '16px' }}>
              <BUButton
                text="Banca en Línea"
                horizontalPadding="50px"
                fontWeight="400"
              />
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
  
};

export default BUNavbar;
