import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent
} from "@mui/material";
import BUBarChart from "../../components/BUBarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../index.css";
import CardWithIcon from "../../components/CardWithIcon";
import BalanceCard from "../../components/BalanceCard";
import WelcomeCard from "../../components/WelcomeCard";

const Home = ({ showPerfil }) => {
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                {/* First Card */}
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <WelcomeCard handleProfileClick={showPerfil} />
                </Grid>

                {/* Balance Card */}
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <BalanceCard isBig={false} />
                </Grid>

                {/* Third Card Group */}
                <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2, // Space between stacked cards
                    }}
                >
                    {/* Dark Card */}
                    <CardWithIcon
                        style="dark"
                        primaryText="Viernes, 12 de julio del 2024"
                        secondaryText="Fecha de la última transacción"
                    />

                    {/* Light Card */}
                    <CardWithIcon
                        style="light"
                        primaryText="Bs. 1200,55"
                        secondaryText="Monto de la última operación"
                    />
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 2, flex: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Card sx={{ borderRadius: "1.1rem" }}>
                            <CardContent>
                                <Box sx={{ height: "280px", marginTop: 2 }}>
                                    <Typography variant="h6">
                                        Operaciones realizadas
                                    </Typography>
                                    <BUBarChart sx={{ margin: "10px" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box sx={{ height: "250px" }}>
                            <Card sx={{ borderRadius: "1.1rem", height: "auto" }}>
                                <CardContent>
                                    <Box sx={{ flex: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={10}>
                                                <Typography
                                                    sx={{
                                                        fontFamily: "Montserrat",
                                                        color: "#000",
                                                    }}
                                                >
                                                    Últimas Operaciones
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <MoreHorizIcon sx={{ color: "#6DCBC5" }} />
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Box
                                        sx={{
                                            marginTop: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{ display: "flex", flexDirection: "column" }}
                                            >
                                                <Typography variant="body1">Pago móvil</Typography>
                                                <Typography variant="body2" sx={{ fontSize: 10 }}>
                                                    12345678912345678900
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-end",
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontWeight: "bold" }}
                                                    variant="body1"
                                                >
                                                    <Box
                                                        sx={{ display: "flex", alignItems: "flex-end" }}
                                                    >
                                                        <span>Bs. 320,25</span>
                                                        <span>
                                                            <KeyboardArrowUpIcon
                                                                sx={{
                                                                    marginLeft: 2,
                                                                    backgroundColor: "#B9F6CA",
                                                                    color: "03C955",
                                                                }}
                                                            />
                                                        </span>
                                                    </Box>
                                                </Typography>

                                                <Typography variant="body2" sx={{ fontSize: 10 }}>
                                                    12 de julio, 2024
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: 2,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{ display: "flex", flexDirection: "column" }}
                                            >
                                                <Typography variant="body1">
                                                    Pago panadería
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                    sx={{ fontSize: 10 }}
                                                >
                                                    12345678912345678900
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-end",
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontWeight: "bold" }}
                                                    variant="body1"
                                                >
                                                    <Box
                                                        sx={{ display: "flex", alignItems: "flex-end" }}
                                                    >
                                                        <span>Bs. 255,67</span>
                                                        <span>
                                                            <KeyboardArrowDownIcon
                                                                sx={{
                                                                    marginLeft: 2,
                                                                    backgroundColor: "#FBE9E7",
                                                                    color: "#D84315",
                                                                }}
                                                            />
                                                        </span>
                                                    </Box>
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontSize: 10 }}>
                                                    10 de julio, 2024
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="#085F63"
                                        sx={{ marginTop: 4, textAlign: "center" }}
                                    >
                                        Ver todas
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
