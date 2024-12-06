import React from 'react';
import {
    Typography,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import { selectUserLogged } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';

const WelcomeCard = ({ handleProfileClick }) => {
    const user = useSelector(selectUserLogged); // Get user info from Redux store
    const userName = `${user.first_name} ${user.last_name}`;

    return (
        <>
            <Card
                sx={{
                    backgroundColor: "#6DCBC5",
                    color: "#000",
                    borderRadius: 4,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 1,
                    display: 'flex',
                    height: '100%'
                }}
            >
                <CardContent>
                    <Typography sx={{
                        fontSize: '1.3rem',
                        color: '#000',
                        fontWeight: 500, // Medium
                        fontFamily: 'Montserrat Alternates, sans-serif',
                    }}>
                        Buen día,
                    </Typography>
                    <Typography sx={{
                        color: '#000',
                        fontWeight: 500, // Medium
                        fontFamily: 'Montserrat Alternates, sans-serif',
                        marginBottom: '4px'
                    }}>
                        {userName}
                    </Typography>
                    <Typography color="textSecondary" sx={{
                        fontSize: '0.7rem',
                        color: '#000',
                        fontWeight: 500, // Medium
                        fontFamily: 'Montserrat Alternates, sans-serif',
                    }}>
                        Viernes, 12 de julio del 2024
                    </Typography>
                    <Button
                        sx={{
                            marginTop: '16px',
                            backgroundColor: "#49BEB7",
                            color: "#fff",
                            alignSelf: "flex-start",
                        }}
                        onClick={handleProfileClick}
                    >
                        Ver perfil
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default WelcomeCard;
