import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import logo_white from "../../assets/img/logo_blanco.png";
import iconMail from "../../assets/img/iconMail.png";
import iconPhone from "../../assets/img/iconPhone.png";
import iconUbicacion from "../../assets/img/iconUbicacion.png";
import iconFax from "../../assets/img/iconFax.png";
import iconFb from "../../assets/img/iconFb.png";
import iconTw from "../../assets/img/iconTw.png";
import iconIg from "../../assets/img/iconIg.png";
import favicon from "../../assets/favicon.ico";

const BUFooter = () => {
  return (
    <Box className="bg-footer-gradient" sx={{ width: "100%" }}>
      <Container maxWidth="lg" disableGutters sx={{ py: 4 }}>
        <Box
          sx={{
            display: {xs:"block" ,lg:"flex"},
            justifyContent: {xs:"center",lg:"space-between"},
            alignItems: {xs:"center",lg:"flex-start"},
          }}
        >
          {/* Logo Área */}
          <Box
            sx={{ display: "flex", alignItems: "center", mx: 4 , mb: { xs: 2, lg: 0 } }}
          >
            <img
              src={logo_white}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          {/* Información de Contacto */}
          <Box sx={{ mb: { xs: 2, lg: 0 }, flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <img src={iconMail} alt="Email" style={{ marginRight: 8 }} />
              <Typography sx={{color:"white"}}>info@bancouniversitario.com.ve</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <img src={iconPhone} alt="Teléfono" style={{ marginRight: 8 }} />
              <Typography sx={{color:"white"}}>+58 212-555-5555</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <img src={iconFax} alt="Fax" style={{ marginRight: 8 }} />
              <Typography sx={{color:"white"}}>+58 212-555-5556</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <img
                src={iconUbicacion}
                alt="Ubicación"
                style={{ marginRight: 8 }}
              />
              <Typography sx={{color:"white"}}>
                Av. Universidad, Edificio Banco Universitario, piso 12, Caracas,
                Venezuela.
              </Typography>
            </Box>
          </Box>

          {/* Línea Vertical */}
          <Box
            sx={{
              width: "2px",
              backgroundColor: "white",
              height: "60%",
              mx: 2,
            }}
          />

          {/* Redes Sociales */}
          <Box
            sx={{
              textAlign: { xs: "center", lg: "right" },
              display: { xs: "block", lg: "flex" },
              flexDirection: { xs: "column", lg: "row" },
              alignItems: { xs: "center", lg: "center" },
              mt: 3, // Espacio superior para separar de la información de contacto
            }}
          >
            <Typography variant="h6" sx={
              { color:"white", fontWeight: "bold", mb: 1, display: { xs: "block", lg: "none" } }
              }>
              Síguenos
            </Typography>

            {/* Iconos en pantallas pequeñas */}
            <Box sx={{ display: { xs: "block", lg: "none" }, mb: 1 }}>
              <IconButton>
                <img src={iconFb} alt="Facebook" />
              </IconButton>
              <IconButton>
                <img src={iconTw} alt="Twitter" />
              </IconButton>
              <IconButton>
                <img src={iconIg} alt="Instagram" />
              </IconButton>
            </Box>
            <Typography
              variant="caption"
              sx={{ color:"white", display: { xs: "block", lg: "none" } }}
            >
              @bancouniversitariove
            </Typography>

            {/* Iconos y nombres en pantallas grandes */}
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <IconButton>
                  <img src={iconFb} alt="Facebook" />
                </IconButton>
                <Typography sx={{ ml: 1, color: "white" }}>
                  @bancouniversitariove
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <IconButton>
                  <img src={iconTw} alt="Twitter" />
                </IconButton>
                <Typography sx={{ ml: 1, color: "white" }}>
                  @bancouniversitariove
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                  <img src={iconIg} alt="Instagram" />
                </IconButton>
                <Typography sx={{ ml: 1, color: "white" }}>
                  @bancouniversitariove
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Derechos de Autor */}
      
      <Box sx={{ bgcolor: "#085F63", display: "row" , alignItems: "center", py: 2 }}>
        <Box  sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
        <img src={favicon}  alt="Favicon"  />
        <Typography sx={{color: "white"}} variant="body2">
          Derechos protegidos por Banco Universitario | 2024
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BUFooter;