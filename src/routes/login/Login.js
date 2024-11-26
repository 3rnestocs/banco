import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  Stack,
  Divider,
  Alert,
} from '@mui/material';
import BUTextField from '../../components/BUTextField';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'; // Adjust the path to your theme file
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  selectIsLogged,
  selectUserErrorMessage,
  selectUserLoading,
} from '../../redux/user/userSlice';
import { hasFieldsErrors, isObjNotEmpty } from '../../utils/formValidation';

const DEFAULT_FORM = {
  email: '',
  password: '',
};

const FORM_VALIDATORS = {
  email: ['required', 'email'],
  password: ['required', { maxLength: 16 }],
};

const Login = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [formErrors, setFormErrors] = useState(DEFAULT_FORM);
  const [apiError, setApiError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector(selectIsLogged);
  const userErrorMessage = useSelector(selectUserErrorMessage);
  const userLoading = useSelector(selectUserLoading);

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [field]: null })); // Clear errors for this field
  };

  const validateForm = () => {
    const errors = hasFieldsErrors(form, FORM_VALIDATORS);
    setFormErrors(errors);
    return !isObjNotEmpty(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(''); // Clear previous API error

    if (!validateForm()) return; // Stop if validation fails

    // Dispatch login action
    dispatch(login(form));
  };

  useEffect(() => {
    // Navigate to the dashboard if the user is logged in
    if (isLogged) {
      navigate('/movements');
    }
  }, [isLogged, navigate]);

  useEffect(() => {
    // Update API error message if present
    if (userErrorMessage) {
      setApiError(userErrorMessage);
    }
  }, [userErrorMessage]);

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
          <Box sx={{ textAlign: 'center', mb: 2, mt: 4 }}>
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

              {/* Error Alert */}
              {apiError && <Alert severity="error">{apiError}</Alert>}

              {/* Email field */}
              <BUTextField
                fieldType="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
              />

              {/* Password field */}
              <BUTextField
                fieldType="password"
                value={form.password}
                onChange={(e) => handleChange('password', e.target.value)}
                error={!!formErrors.password}
                helperText={formErrors.password}
                required
              />

              {/* Submit Button */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
                disabled={userLoading}
              >
                {userLoading ? 'Cargando...' : 'Iniciar sesión'}
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
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            sx={{ mt: 3, mb: 3 }}
          >
            Banco Universitario © | 2024
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
