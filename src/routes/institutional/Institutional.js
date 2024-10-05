import React from 'react';
import { Typography, Button } from '@mui/material';

const Institutional = () => {
  return (
    <div>
      <Typography variant="h3">Bienvenido al Banco Universitario</Typography>
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
