import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Popover,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const NavbarDash = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Controlar el popover
  const [open, setOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // Estado para controlar si el popover está abierto o cerrado

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Al hacer clic, setea la posición del popover
    setOpen(true); // Abre el popover
    setButtonClicked(true); // Marca el botón como "clickeado"
  };

  const handleClose = () => {
    setOpen(false); // Cierra el popover
    setButtonClicked(false); // Restablece el estado de "clickeado" cuando se cierra
  };

  const handleProfileClick = () => {
    console.log('Ir al perfil del usuario');
    // Aquí puedes implementar la lógica para redirigir al perfil o mostrar la información
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src="https://3rnestocs.github.io/banco/logo.png"
            alt="Banco Universitario"
            style={{ height: '40px', marginRight: '16px',  marginTop: '8px' }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: buttonClicked ? '#B6E5E2' : '#EEF2F6', // Color del botón cuando está clickeado
              borderRadius: '30px',
              width: '105px',
              height: '55px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '2px solid #085F63',
              position: 'relative',
              mt: 3,
              '&:hover': {
                backgroundColor: '#B6E5E2', // Color hover
              },
            }}
            onClick={handleClick} // Abre el popover al hacer clic
          >
            <Typography
              variant="h6"
              sx={{
                color: '#ffffff',
                borderRadius: '50%',
                backgroundColor: '#3891B3',
                padding: '5px 10px',
                fontWeight: 'normal',
                fontFamily: "'Montserrat Alternates', sans-serif",
              }}
            >
              JD
            </Typography>

            {/* Settings Icon */}
            <SettingsIcon sx={{ color: '#085F63', fontSize: '30px' }} />
          </Button>
        </Toolbar>
      </AppBar>

      {/* Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          marginTop: '20px',
          
        }}
      >
        <Box sx={{ p: 2, width: '400px' }}>
          <Typography variant="h5" sx={{
             fontWeight: 'bold', 
             color: 'black', 
             fontFamily: "'Montserrat Alternates', sans-serif" ,
             }}>
            Buen dia, <span style={{ fontWeight: 'normal' }}>John Doe</span>
          </Typography>
          <Typography variant="caption" color="text.secondary"
          sx={{
      
            fontSize: '15px',  
          }}>
          Usuario</Typography>

          <Box sx={{ borderBottom: '1px solid #ddd', mb: 2 }} />
          
          {/* Action Buttons */}
          <Stack spacing={1}>
            <Button
              variant="text"
              onClick={handleProfileClick}
              color="error"
              sx={{
                color: 'black', 
                fontFamily: 'roboto',
                fontSize: '18px',
                fontWeight: 'normal',
                justifyContent: 'flex-start',
                display: 'flex', 
                alignItems: 'center', 
                '&:hover': {
                  color: '#397F82', 
                  backgroundColor: '#E2F5F3', // Fondo cuando pasa el mouse
                },
              }}
            >
              {/* Icono de perfil con color negro */}
              <Box
                sx={{
                  borderRadius: '50%',
                  border: '3px solid black',
                  padding: '5px',
                  marginRight: '10px',
                  '&:hover': {
                    color: '#397F82',
                    
                  },
                }}
              >
                <PersonIcon sx={{ fontSize: '30px' }} />
              </Box>
              Perfil
            </Button>
            
            <Link to="/login" style={{ textDecoration: 'none' }}> {/* Se asegura que el link no tenga subrayado */}
              <Button
                variant="text"
                color="error"
                sx={{
                  color: 'black', 
                  fontFamily: 'roboto',
                  fontSize: '18px',
                  fontWeight: 'normal',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  alignItems: 'center', 
                  width: '100%',
                  '&:hover': {
                    color: '#397F82', // Color verde cuando pasa el mouse
                    backgroundColor: '#E2F5F3', // Fondo cuando pasa el mouse
                  },
                }}
              >
                
                <ExitToAppIcon sx={{ marginRight: '7px' , fontSize: '45px'}} />
                Cerrar sesión
              </Button>
            </Link>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default NavbarDash;
