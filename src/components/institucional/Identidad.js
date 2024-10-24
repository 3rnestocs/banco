import React, { forwardRef } from "react";
import imgMisio from "../../assets/img/imgMision.png";
import imgVisio from "../../assets/img/imgVisio.png";
import groupMision from "../../assets/img/groupMision.png";
import groupVision from "../../assets/img/groupVision.png";
import objetivo1 from "../../assets/img/objetivos/obj1.png";
import objetivo2 from "../../assets/img/objetivos/obj2.png";
import objetivo3 from "../../assets/img/objetivos/obj3.png";
import objetivo4 from "../../assets/img/objetivos/obj4.png";
import objetivo5 from "../../assets/img/objetivos/obj5.png";
import objResponsive from "../../assets/img/objetivos/objResponsive.png";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';
import { Box } from "@mui/material";

const Identidad = forwardRef((props, ref) => {
  return (
    <Box
      id="container-identidad"
      sx={{ bgcolor: "background.default", m: 0, p: 5 }}
      ref={ref}
    >
      {/* Header Title - Centered */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BUHeaderTitle text="IDENTIDAD EMPRESARIAL" type={HeaderTypes.WHITE} />
      </Box>

      <Box sx={{ textAlign: "center" }}>
        {/* Imágenes de misión y visión para pantallas grandes */}
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <img
            src={imgMisio}
            alt="Misión"
            style={{ width: "100%", height: "auto" }}
          />
          <img
            src={imgVisio}
            alt="Visión"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Imágenes de misión y visión para pantallas más pequeñas */}
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <img
            src={groupMision}
            alt="Grupo Misión"
            style={{ width: "100%", height: "auto" }}
          />
          <img
            src={groupVision}
            alt="Grupo Visión"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      {/* Another header title - Centered */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BUHeaderTitle text="OBJETIVOS" type={HeaderTypes.WHITE} />
      </Box>

      {/* Objetivos para pantallas grandes */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          textAlign: "center",
          mb: 3,
        }}
      >
        <img
          src={objetivo1}
          alt="Objetivo 1"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src={objetivo2}
          alt="Objetivo 2"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src={objetivo3}
          alt="Objetivo 3"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src={objetivo4}
          alt="Objetivo 4"
          style={{ width: "auto", height: "auto" }}
        />
        <img
          src={objetivo5}
          alt="Objetivo 5"
          style={{ width: "auto", height: "auto" }}
        />
      </Box>

      {/* Objetivos para pantallas más pequeñas */}
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          textAlign: "center",
          mb: 3,
        }}
      >
        <img
          src={objResponsive}
          alt="Objetivos Responsivos"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
});



export default Identidad;