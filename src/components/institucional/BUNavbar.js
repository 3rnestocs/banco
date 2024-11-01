import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button, AppBar, Toolbar, IconButton, Box, useMediaQuery } from "@mui/material";
import BUButton from "../BUButton";

const BUNavbar = ({ serviciosRef, identidadRef, contactoRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", width: "100%", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img id="img-logo" width="auto" src={logo} height={42} alt="Logo" />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isSmallScreen ? (
            <Link to="/login" style={{ marginLeft: '16px' }}>
              <BUButton
                text="Banca en Línea"
                horizontalPadding="30px"
                fontWeight="400"
                sx={{ fontSize: '0.8rem', padding: '8px 16px' }}
              />
            </Link>
          ) : (
            <>
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  alignItems: "center",
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
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                    padding: { xs: '8px 12px', sm: '8px 12px', md: '12px 24px' },
                  }}
                />
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default BUNavbar;