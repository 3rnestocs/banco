import React, { useState } from 'react';
import { Button, Container, Box, Grid, Typography, Divider, Link } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import BUTextField from '../../components/BUTextField';
import theme from '../../theme'; // Adjust the path to your theme file

const Register = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [document, setDocument] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register submitted', { name, email, phone, password });
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
                <Container maxWidth="sm" sx={{ p: 8, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
                    <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                        Registro
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                {/* Name field */}
                                <BUTextField
                                    fieldType="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <BUTextField
                                    fieldType="lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </Grid>

                            <Grid item xs={6}>
                                {/* Document field */}
                                <BUTextField
                                    fieldType="document"
                                    value={document}
                                    onChange={(e) => setDocument(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                {/* Phone field */}
                                <BUTextField
                                    fieldType="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </Grid>
                        </Grid>

                        {/* Date field */}
                        <BUTextField
                            fieldType="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
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
                            fieldType="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            customValidationFn={(value) => ({
                                isValid: value === password,
                                message: value !== password ? 'Las contraseñas no coinciden' : '',
                            })}
                        />

                        <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
                            Registrarse
                        </Button>
                    </form>

                    <Divider sx={{ mt: 3, mb: 1 }} />

                    {/* Login Link */}
                    <Link href="/login">
                        <Button fullWidth variant="text" color="primary">
                            ¿Ya tienes una cuenta?
                        </Button>
                    </Link>

                    {/* Footer */}
                    <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 4 }}>
                        Banco Universitario © | 2024
                    </Typography>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Register;