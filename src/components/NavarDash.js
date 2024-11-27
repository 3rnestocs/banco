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
import SettingsIcon from '@mui/icons-material/Settings';


const NavbarDash = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Controlar el popover
  const [open, setOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // Estado para controlar si el popover está abierto o cerrado

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Al hacer clic, setea la posición del popover
    setOpen(true); // Abre el popover
    setButtonClicked(true);
  };

  const handleClose = () => {
    setOpen(false); // Cierra el popover
    setButtonClicked(false);
  };

  const handleProfileClick = () => {
    console.log('Ir al perfil del usuario');
    // Aquí puedes implementar la lógica para redirigir al perfil o mostrar la información
  };

  const handleLogoutClick = () => {
    console.log('Cerrar sesión');
    // Aquí puedes implementar la lógica para cerrar sesión
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src="https://3rnestocs.github.io/banco/logo.png"
            alt="Banco Universitario"
            style={{ height: '40px', marginRight: '16px' }}
          />
          
          <Button
            variant="contained"
            sx={{
              backgroundColor: buttonClicked ? '#B6E5E2' : '#EEF2F6',
              borderRadius: '30px', 
              width: '110px',  
              height: '55px',
              display: 'flex',
              justifyContent: 'space-between', 
              alignItems: 'center',
              border: '3px solid #085F63', 
              position: 'relative',
              '&:hover': {
                backgroundColor: '#B6E5E2',
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
             mb: 1, 
             fontWeight: 'bold', 
             color: 'black', 
             fontFamily: "'Montserrat Alternates', sans-serif" ,
             borderRadius: '50%',
             }}>
            
               
            Buen dia, <span style={{ fontWeight: 'normal' }}>John Doe</span>
          </Typography>
        
          <Box sx={{ borderBottom: '1px solid #ddd', mb: 2 }} />
          
          {/* Action Buttons */}
          <Stack spacing={1}>
            <Button
            variant="text" 
            onClick={handleProfileClick}
            color="error" 
            sx={{
                color: 'black',
                fontFamily:' roboto ', 
                fontSize: '18px',
                fontWeight: 'normal',
                justifyContent: 'flex-start',   
                '&:hover': {
                  backgroundColor: '#f0f0f0', 
                },
                
              }}
            >
                
              Perfil
            </Button>
            <Button 
            variant="text"
            color="error" 
            onClick={handleLogoutClick}
            sx={{
                color: 'black',
                fontFamily:' roboto ',  
                fontSize: '18px',
                fontWeight: 'normal',
                justifyContent: 'flex-start',   
                '&:hover': {
                  backgroundColor: '#f0f0f0', 
                },
                
              }}
            >
              Cerrar sesión
            </Button>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default NavbarDash;
