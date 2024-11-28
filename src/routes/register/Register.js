import React, { useState, useEffect } from 'react';
import { Button, Container, Box, Typography, Divider, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import BUTextField from '../../components/BUTextField';
import theme from '../../theme'; // Adjust the path to your theme file
import { Link, useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers';
import { hasFieldsErrors, isObjNotEmpty } from '../../utils/formValidation';
import { registerAPI } from '../../api/modules/user'; // Import the registerAPI function

const DEFAULT_FORM = {
    first_name: '',
    last_name: '',
    document_number: '',
    phone_number: '',
    birth_date: null,
    email: '',
    password: '',
    confirmPassword: '',
};

const FORM_VALIDATORS = {
    first_name: ['required'],
    last_name: ['required'],
    document_number: ['required'],
    phone_number: ['required'],
    birth_date: ['required'],
    email: ['required', 'email'],
    password: ['required', { maxLength: 16 }],
    confirmPassword: ['required'],
};

const Register = () => {
    const [form, setForm] = useState(DEFAULT_FORM);
    const [formErrors, setFormErrors] = useState(DEFAULT_FORM);
    const [apiError, setApiError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setForm((prevForm) => ({ ...prevForm, [field]: value }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [field]: null })); // Clear errors for this field
    };

    const validateForm = () => {
        // Perform form validation
        const errors = hasFieldsErrors(form, FORM_VALIDATORS);
        setFormErrors(errors);
        return !isObjNotEmpty(errors); // If there are no errors, return true
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError(''); // Clear previous API error
    
        // Basic validation for matching passwords
        if (form.password !== form.confirmPassword) {
            setApiError('Las contraseñas no coinciden');
            return;
        }
    
        // Clear any previous error message
        setApiError('');
        setLoading(true);
    
        // Validate form fields
        if (!validateForm()) return; // Stop if validation fails
    
        try {
            // Register data
            const registrationData = {
                first_name: form.first_name,
                last_name: form.last_name,
                document_number: form.document_number,
                phone_number: form.phone_number,
                birth_date: form.birth_date,
                email: form.email,
                password: form.password,
            };
    
            // Call the registerAPI to register the user
            const response = await registerAPI(registrationData);
    
            // If the errors array is empty, registration was successful
            if (response.errors && response.errors.length === 0) {
                // Navigate to login page after successful registration
                navigate('/dashboard');
            } else {
                // If there are errors, set the first error message
                setApiError(response.message || 'Ocurrió un error al registrar al usuario.');
            }
        } catch (error) {
            setApiError('Error en el registro. Por favor, intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        // Optionally, you can check if the user is already logged in
        // If logged in, redirect to dashboard or login page
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#EEF2F6',
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
                    <Box sx={{ textAlign: 'center', mb: 1, mt: 4 }}>
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

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <Typography sx={{ textAlign: 'center' }}>
                                Ingresa tus datos para unírtenos
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                {/* Name field */}
                                <BUTextField
                                    fieldType="name"
                                    value={form.first_name}
                                    onChange={(e) => handleChange('first_name', e.target.value)}
                                    required
                                />

                                {/* Lastname field */}
                                <BUTextField
                                    fieldType="lastname"
                                    value={form.last_name}
                                    onChange={(e) => handleChange('last_name', e.target.value)}
                                    required
                                />
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                {/* Document field */}
                                <BUTextField
                                    fieldType="document"
                                    value={form.document_number}
                                    onChange={(e) => handleChange('document_number', e.target.value)}
                                    required
                                />

                                {/* Phone field */}
                                <BUTextField
                                    fieldType="phone"
                                    value={form.phone_number}
                                    onChange={(e) => handleChange('phone_number', e.target.value)}
                                    required
                                />
                            </Stack>

                            {/* Date Picker Field */}
                            <DatePicker
                                label="Fecha de nacimiento"
                                value={form.birth_date}
                                onChange={(newValue) => handleChange('birth_date', newValue)}
                                sx={{
                                    width: "100%",
                                }}
                            />

                            {/* Email field */}
                            <BUTextField
                                fieldType="email"
                                value={form.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
                            />

                            {/* Password field */}
                            <BUTextField
                                fieldType="password"
                                value={form.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                                required
                            />

                            {/* Confirm password with custom validation */}
                            <BUTextField
                                fieldType="confirmPassword"
                                value={form.confirmPassword}
                                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                required
                                customValidationFn={(value) => ({
                                    isValid: value === form.password,
                                    message: value !== form.password ? 'Las contraseñas no coinciden' : '',
                                })}
                            />

                            {/* Register button */}
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }} disabled={loading}>
                                {loading ? 'Registrando...' : 'Registrarse'}
                            </Button>

                            {apiError && (
                                <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>
                                    {apiError}
                                </Typography>
                            )}
                        </Stack>
                    </form>

                    <Divider sx={{ mt: 3, mb: 1 }} />

                    {/* Login Link */}
                    <Link to="/login">
                        <Button fullWidth variant="text" color="primary">
                            ¿Ya tienes una cuenta?
                        </Button>
                    </Link>

                    {/* Footer */}
                    <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 2, mb: 3 }}>
                        Banco Universitario © | 2024
                    </Typography>
                </Container>
            </Box>
        </ThemeProvider >
    );
};

export default Register;
