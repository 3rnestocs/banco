import React, { useState } from 'react';
import { Button, Container, Box, Typography, Divider, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import BUTextField from '../../components/BUTextField';
import theme from '../../theme'; // Adjust the path to your theme file
import { Link } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers';

const Register = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [document, setDocument] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(null); // or use null
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register submitted', { name, lastname, document, phone, date, email, password, confirmPassword });
    };

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
                                {/* Name field */}
                                <BUTextField
                                    fieldType="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />

                                {/* Lastname field */}
                                <BUTextField
                                    fieldType="lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                {/* Document field */}
                                <BUTextField
                                    fieldType="document"
                                    value={document}
                                    onChange={(e) => setDocument(e.target.value)}
                                    required
                                />

                                {/* Phone field */}
                                <BUTextField
                                    fieldType="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </Stack>

                            {/* Date Picker Field */}
                            <DatePicker
                                label="Fecha de nacimiento"
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                sx={{
                                    width: "100%",
                                }}
                            />

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

                            {/* Confirm password with custom validation */}
                            <BUTextField
                                fieldType="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                customValidationFn={(value) => ({
                                    isValid: value === password,
                                    message: value !== password ? 'Las contraseñas no coinciden' : '',
                                })}
                            />

                            {/* Register button */}
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
                                Registrarse
                            </Button>
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
