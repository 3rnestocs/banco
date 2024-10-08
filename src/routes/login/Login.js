import React, { useState } from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import BUTextField from '../../components/BUTextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'; // Adjust the path to your theme file
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh', // Full height of the viewport
          display: 'flex', // Flexbox for centering
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
          backgroundColor: '#EEF2F6', // Optional background color for the whole page
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#fff',
          }}
        >
          {/* Logo Section */}
          <Box sx={{ textAlign: 'center', mb: 2, mt: 3 }}>
            <img
              src="https://3rnestocs.github.io/banco/logo.png"
              alt="Banco Universitario"
              style={{ width: '50%' }}
            />
          </Box>

          {/* Heading */}
          <Typography variant="h5" align="center" sx={{ mb: 2 }}>
            Banca en línea
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Typography sx={{ textAlign: 'center' }}>
                Ingresa tus credenciales para continuar
              </Typography>

              {/* Email field */}
              <BUTextField
                fieldType="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password field */}
              <BUTextField
                fieldType="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Submit Button */}
              <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
                Iniciar sesión
              </Button>
            </Stack>
          </form>

          <Divider sx={{ mt: 3, mb: 1 }} />

          {/* Register Link */}
          <Link to="/register">
            <Button fullWidth variant="text" color="primary">
              ¿No tienes una cuenta?
            </Button>
          </Link>

          {/* Footer */}
          <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 3 }}>
            Banco Universitario © | 2024
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
