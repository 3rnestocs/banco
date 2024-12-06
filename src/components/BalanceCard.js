import React from 'react';
import { selectUserLogged, selectUserBalance } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MaskCard from "../assets/img/MaskCard.png";
import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

const BalanceCard = ({ isBig }) => {

    const user = useSelector(selectUserLogged); // Get user info from Redux store
    const { balance } = useSelector(selectUserBalance);
    const balanceTypographyVariant = isBig ? "h4" : "h5";

    return (
        <>
            <Card
                sx={{
                    backgroundColor: "#338580",
                    color: "#fff",
                    backgroundImage: `url(${MaskCard})`,
                    backgroundSize: "cover",
                    borderRadius: 4,
                    padding: 1,
                    height: '100%',
                    flex: 1, // Ensures equal height for stacked cards
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <CardContent>
                    <Typography sx={{ color: "#fff", textAlign: "left" }} variant={balanceTypographyVariant}>
                        <AccountBalanceWalletIcon fontSize="large" />
                        <br />
                        Bs. {balance.toFixed(2)}
                        <br />
                    </Typography>
                    <Typography variant="subtitle1" sx={{ textAlign: "left" }}>
                        Balance
                        <br />
                        {isBig ?? <small>{user.account_number || "N/A"}</small>}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default BalanceCard;
