import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
  Divider
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'; // Adjust the path to your theme file

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
      <Container
        maxWidth="sm"
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
        }}
      >
        {/* Logo Section */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img
            src="/logo.png" // Adjust the path to your logo
            alt="Banco Universitario"
            style={{ width: '150px' }}
          />
        </Box>

        {/* Heading */}
        <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
          Banca en línea
        </Typography>

        <Divider component="li" />

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Typography sx={{ textAlign: 'center', mb: 2 }}>
            Ingresa tus credenciales para continuar
          </Typography>

          {/* Email Field */}
          <TextField
            fullWidth
            margin="normal"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field */}
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#49BEB7',
              fontFamily: 'Roboto',
              '&:hover': {
                backgroundColor: '#49BEB7',
              },
            }}
          >
            Iniciar sesión
          </Button>
        </form>

        {/* Register Link */}
        <Typography align="center">
          <Link href="/register" underline="none" sx={{ color: '#085F63' }}>
            ¿No tienes una cuenta?
          </Link>
        </Typography>

        {/* Footer */}
        <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 4 }}>
          Banco Universitario © | 2024
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
