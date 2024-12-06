import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import "../index.css";
import { selectUserLogged } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';
import BalanceCard from "./BalanceCard";

const ProfileHeader = ({ handleChangePassword }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector(selectUserLogged); // Get user info from Redux store

  const userName = `${user.first_name} ${user.last_name}`;
  const formattedDate = user.birth_date
    ? new Date(user.birth_date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    : 'N/A';

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePassword = () => {
    handleClose();
    handleChangePassword();
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Datos personales
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={2}>
                    <Avatar
                      sx={{
                        bgcolor: "#49BEB7",
                        width: 56,
                        height: 56,
                        fontSize: 24,
                        marginBottom: 2,
                      }}
                    >
                      JD
                    </Avatar>
                  </Grid>
                  <Grid item xs={8} sm={8}>
                    <Typography variant="h6" component="div">
                      {userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Número de documento {user.document_number || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Nacido el {formattedDate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.phone_number || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.email || 'N/A'}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "2px" }}
                      onClick={handlePassword}
                    >
                      Cambiar contraseña
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <BalanceCard isBig={true} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileHeader;
