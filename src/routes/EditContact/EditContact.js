import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../../components/Sidebar";
import Theme from "../../theme";
import {
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../../index.css";

const EditContact = () => {
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  const handleClickShowAccountNumber = () =>
    setShowAccountNumber(!showAccountNumber);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            height: "calc(100vh - 105px)",
          }}
        >
          {/* Panel izquierdo */}
          <Sidebar />

          {/* Área principal del dashboard */}
          <Box
            sx={{
              flex: 1,
              marginLeft: {
                xs: "0",
                sm: "200px",
                md: "350px",
              },
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              boxShadow: 2,
              padding: "20px",
              overflowY: "auto",
              height: "calc(102vh - 105px)",
              marginRight: "25px",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <Card style={{ margin: "auto" }}>
                  <CardContent>
                    <Typography variant="h5">Editar Contacto</Typography>
                    <Box sx={{ borderBottom: "1px solid silver" }} />
                    <small>Modifique los datos del contacto</small>
                  </CardContent>
                  <CardContent>
                    <TextField
                      fullWidth
                      label="Alias"
                      defaultValue="Panadero"
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Número de cuenta"
                      type={showAccountNumber ? "text" : "password"}
                      defaultValue="01524526352415623"
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle account number visibility"
                              onClick={handleClickShowAccountNumber}
                              edge="end"
                            >
                              {showAccountNumber ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Descripción"
                      defaultValue="Panadero de la cuadra."
                      margin="normal"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ borderRadius: 1, marginRight: 1 }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: 1,
                          background: "#49BEB7",
                          color: "#000",
                        }}
                      >
                        Editar
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default EditContact;
