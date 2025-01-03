import React from "react";

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HistoryIcon from '@mui/icons-material/History'; 
import AddIcon from '@mui/icons-material/Add'; 
import ContactsIcon from '@mui/icons-material/ContactPhone'; 
import NotesIcon from '@mui/icons-material/Notes'; 

const Sidebar = ({ handleHistoryClick,  }) => {
    return (
        <>
            {/* Panel izquierdo */}
            < Box
                sx={{
                    width: '350px',
                    height: '100%',
                    backgroundColor: '#ffff',
                    padding: '20px',
                    position: 'fixed',
                    top: '64px',
                    left: '0',
                    bottom: '0',
                    mt: 5,
                }
                }
            >
                {/* Título del panel */}
                < Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: 'black',
                    fontFamily: 'roboto',
                }}>
                    Panel
                </Typography >

                <Box sx={{ width: '100%' }}>
                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '100%',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            color: 'black',
                            backgroundColor: '#ffffff',
                            fontFamily: 'Roboto',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#E2F5F3',
                                color: '#00796B',
                            },
                        }}
                    >
                        <DashboardIcon sx={{ marginRight: '10px', color: '#00796B' }} />
                        <Typography variant="caption" sx={{ fontSize: '18px', marginRight: '10px' }}>
                            Posición consolidada
                        </Typography>
                    </Button>
                    <Box sx={{ borderBottom: '2px solid #8dd7d2', mt: 2 }} />

                    {/* Sección de Operaciones */}
                    <Typography variant="h6" sx={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        color: 'black',
                        fontFamily: 'Roboto',
                    }}>
                        Operaciones
                    </Typography>

                    {/* Accordion para Transferencias */}
                    <Accordion sx={{ mb: 1, boxShadow: 'none' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                backgroundColor: '#fffff',
                                border: 'none',
                                '& .MuiTypography-root': {
                                    fontFamily: 'Roboto',
                                    color: 'black',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'black',
                                },
                                '&:hover': {
                                    color: '#397F82',
                                    backgroundColor: '#E2F5F3',
                                    '& .MuiTypography-root': {
                                        color: '#397F82',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: '#397F82',
                                    },
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccountBalanceIcon sx={{ marginRight: '10px' }} />
                                <Typography>Transferencias</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px 0',
                                '&:hover': {
                                    color: '#397F82',
                                    '& .MuiTypography-root': {
                                        color: '#397F82',
                                    },
                                },
                            }}>
                                <Box sx={{ width: '3px', height: '45px', backgroundColor: '#397F82', marginRight: '10px' }} />
                                <HistoryIcon sx={{ marginRight: '10px' }} onClick={handleHistoryClick} />
                                <Typography
                                    variant="body2"
                                    sx={{ cursor: 'pointer' }}
                                    onClick={handleHistoryClick}
                                >
                                    Historial de movimientos</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': {
                                    color: '#397F82',
                                    '& .MuiTypography-root': {
                                        color: '#397F82',
                                    },
                                },
                            }}>
                                <Box sx={{ width: '3px', height: '45px', backgroundColor: '#397F82', marginRight: '10px' }} />
                                <AddIcon sx={{ marginRight: '10px' }} />
                                <Typography variant="body2">Realizar transferencia</Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* Accordion para Contactos */}
                    <Accordion sx={{ mb: 1, boxShadow: 'none' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                backgroundColor: '#fffff',
                                border: 'none',
                                '& .MuiTypography-root': {
                                    fontFamily: 'Roboto',
                                    color: 'black',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'black',
                                },
                                '&:hover': {
                                    color: '#397F82',
                                    backgroundColor: '#E2F5F3',
                                    '& .MuiTypography-root': {
                                        color: '#397F82',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: '#397F82',
                                    },
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccountBalanceIcon sx={{ marginRight: '10px' }} />
                                <Typography>Contactos</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px 0',
                                '&:hover': {
                                    color: '#397F82',
                                    '& .MuiTypography-root': {
                                        color: '#397F82',
                                    },
                                },
                            }}>
                                <Box sx={{ width: '3px', height: '45px', backgroundColor: '#397F82', marginRight: '10px' }} />
                                <NotesIcon sx={{ marginRight: '10px' }} />
                                <Typography variant="body2">Libreta</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': {
                                    color: '#397F82',
                                    '& .MuiTypography-root': {
                                        color: '#397F82',
                                    },
                                },
                            }}>
                                <Box sx={{ width: '3px', height: '45px', backgroundColor: '#397F82', marginRight: '10px' }} />
                                <ContactsIcon sx={{ marginRight: '10px' }} />
                                <Typography variant="body2">Agregar Contacto</Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Box sx={{ borderTop: '2px solid #8dd7d2', my: 1 }} />

                    {/* Pie de página */}
                    <Box
                        sx={{
                            backgroundColor: '#f5f5f5',
                            borderRadius: '25px',
                            padding: '10px',
                            textAlign: 'center',
                            mt: 2,
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: '15px' }}>
                            Banco Universitario © | 2024
                        </Typography>
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default Sidebar;