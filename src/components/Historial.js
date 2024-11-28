import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Historial = () => {
  return (
    <Box
      sx={{
            flex: 1,
            marginLeft: '350px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: 2,
            padding: '20px',
            overflowY: 'auto',
            height: 'calc(100vh - 105px)',
            marginRight: '25px',
      }}
    >
      <Typography variant="h6" sx={{ 
        marginBottom: '20px',
        color: 'black',  
        fontFamily: 'Roboto', 
        }}>
        Operaciones
      </Typography>

      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="body1" sx={{ color: 'green' }}>
          Pago móvil
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          <AttachMoneyIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Bs. 320,25
        </Typography>
        <Typography variant="caption" sx={{ color: 'gray' }}>
          06 de enero, 2024
        </Typography>
      </Box>

      <Divider />

      <Box sx={{ marginTop: '10px', marginBottom: '10px' }}>
        <Typography variant="body1" sx={{ color: 'red' }}>
          Pago pandería
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          <AttachMoneyIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Bs. 255,57
        </Typography>
        <Typography variant="caption" sx={{ color: 'gray' }}>
          10 de enero, 2024
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Button variant="contained" color="primary">
          Agregar Operación
        </Button>
      </Box>
    </Box>
  );
};

export default Historial;