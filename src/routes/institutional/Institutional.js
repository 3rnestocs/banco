import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Institutional = () => {
  return (
    <div>
      <Typography variant="h4">Bienvenido al Banco Universitario</Typography>
      <Typography variant="body1">
        Estamos comprometidos para brindarte los mejores servicios!...
      </Typography>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Iniciar sesión
        </Button>
      </Link>
      <Button variant="text" color="primary">
        Hacer otra cosa
      </Button>
    </div>
  );
};

export default Institutional;
