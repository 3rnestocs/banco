import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Divider, List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#f0f0f0',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6">Banco Universitario</Typography>
        <Divider sx={{ margin: '16px 0' }} />
        <Typography variant="subtitle1">Operaciones</Typography>
        <List>
          <ListItem button>
            <ListItemText primary="Transferencias" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contactos" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Agregar contacto" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '16px' }}>
        <AppBar position="static" sx={{ backgroundColor: '#0065B1' }}>
          <Toolbar>
            <Typography variant="h6">Dashboard</Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: '16px' }}>
          <Typography variant="h4">Posición consolidada</Typography>
          <Box sx={{ backgroundColor: '#e0e0e0', height: 'calc(100% - 64px)', padding: '16px', borderRadius: '8px' }}>
            {/* Aquí puedes agregar contenido adicional, como gráficos o tablas */}
            <Typography variant="body1">Contenido de la posición consolidada aquí...</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;