import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import iconPay from "../assets/img/iconLastPay.png";

const CardWithIcon = ({ style, primaryText, secondaryText }) => {
  // Define default styles for "dark" and "light"
  const isDark = style === "dark";
  const styles = {
    backgroundColor: isDark ? "#054245" : "#fff",
    iconColor: isDark ? "#fff" : "#000",
    textColor: isDark ? "#fff" : "#000",
    icon: isDark ? <LibraryBooksIcon /> : <img src={iconPay} alt="Payment Icon" style={{ height: "24px", width: "24px" }} />,
  };

  return (
    <Card
      sx={{
        borderRadius: "1.2rem",
        backgroundColor: styles.backgroundColor,
        flex: 1, // Ensures equal height for stacked cards
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              color: styles.iconColor,
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {styles.icon}
          </Box>
          {/* Labels */}
          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
                fontFamily: "Roboto",
                fontWeight: 700,
                color: styles.textColor,
              }}
            >
              {primaryText}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontFamily: "Roboto",
                fontWeight: 400,
                color: styles.textColor,
                opacity: 0.5,
              }}
            >
              {secondaryText}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardWithIcon;
