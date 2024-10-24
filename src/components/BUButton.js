import React from 'react';
import { Button } from '@mui/material';

// Helper function to adjust color opacity
const applyOpacity = (hexColor, opacity) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const BUButton = ({
  text,
  onClick,
  bgColor = 'var(--primary-color)', // Default to primary color
  horizontalPadding = '16px',       // Default padding
  fontFamily = 'Roboto',            // Default font family
  fontWeight = '600',               // Default font weight
  textColor = '#fff',               // Default text color
}) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        borderRadius: '24px', // Optional customization
        '&:hover': {
          backgroundColor: applyOpacity(bgColor, 0.5), // Slightly transparent on hover
        },
      }}
    >
      {text}
    </Button>
  );
};

export default BUButton;
