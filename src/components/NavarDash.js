import React, { useState, useEffect } from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsLogged, selectUserLogged } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const NavbarDash = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Control the popover
  const [open, setOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // State to control popover visibility

  const isLogged = useSelector(selectIsLogged);
  const user = useSelector(selectUserLogged); // Get user info from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Compute initials based on the first and last name
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName?.charAt(0).toUpperCase() || '';
    const lastInitial = lastName?.charAt(0).toUpperCase() || '';
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(user.first_name, user.last_name);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set popover position
    setOpen(true); // Open popover
    setButtonClicked(true); // Mark button as "clicked"
  };

  const handleClose = () => {
    setOpen(false); // Close popover
    setButtonClicked(false); // Reset button state
  };

  const handleProfileClick = () => {
    console.log('Go to user profile');
    // Add logic to navigate to profile
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  useEffect(() => {
    // Navigate to the login page if the user is not logged in
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged, navigate]);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src="https://3rnestocs.github.io/banco/logo.png"
            alt="Banco Universitario"
            style={{ height: '40px', marginRight: '16px', marginTop: '8px' }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: buttonClicked ? '#B6E5E2' : '#EEF2F6', // Button color when clicked
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
                backgroundColor: '#B6E5E2', // Hover color
              },
            }}
            onClick={handleClick} // Open popover on click
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
              {initials || 'JD'} {/* Display initials */}
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
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: 'black',
              fontFamily: "'Montserrat Alternates', sans-serif",
            }}
          >
            Buen día,{' '}
            <span style={{ fontWeight: 'normal' }}>
              {user.first_name || 'John'} {user.last_name || 'Doe'}
            </span>
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              fontSize: '15px',
            }}
          >
            Usuario
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
                fontFamily: 'roboto',
                fontSize: '18px',
                fontWeight: 'normal',
                justifyContent: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#397F82',
                  backgroundColor: '#E2F5F3', // Hover background
                },
              }}
            >
              {/* Profile Icon */}
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

            <Button
              variant="text"
              color="error"
              onClick={handleLogout}
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
                  color: '#397F82',
                  backgroundColor: '#E2F5F3',
                },
              }}
            >
              <ExitToAppIcon sx={{ marginRight: '7px', fontSize: '45px' }} />
              Cerrar sesión
            </Button>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default NavbarDash;
