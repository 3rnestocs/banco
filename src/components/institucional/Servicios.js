import React, { forwardRef } from 'react';
import collage from "../../assets/img/collageServi.jpg";
import collageMobile from "../../assets/img/collageServiMobile.jpg";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';
import { Box } from '@mui/material';

const Servicios = forwardRef((props, ref) => {
  return (
  <Box
      id="servicios"
      sx={{
        mt: 5,
        p: 5,
        textAlign: "center",
      }}
      ref={ref}
    >
      <BUHeaderTitle text="SERVICIOS" type={HeaderTypes.SECONDARY} />

      {/* Imágenes responsivas */}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <img
          src={collage}
          alt="Collage de Servicios"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <img
          src={collageMobile}
          alt="Collage de Servicios Móvil"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
});


export default Servicios;