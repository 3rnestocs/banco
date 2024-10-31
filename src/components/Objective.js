import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';


const OverlayText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 147, 
  left: 0,
  right: 0,
  bottom: 0, 
  backgroundColor: 'White', 
  color: 'black', 
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '1.3rem', 
  zIndex: 1,
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.5s ease-in-out', 
  
}));

const Objective = ({ src, smallSrc, text, isHovered }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        overflow: 'hidden', 
        textAlign: 'center',
        margin: { xs: '15px', sm: '35px' },
      }}
    >
      <img 
        src={isSmallScreen ? smallSrc : src} 
        alt={text} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          transition: 'transform 0.5s ease-in-out', 
          transform: isHovered ? 'translate(0, -300px)' : 'translate(0, 0)', 
        }} 
      />
      <OverlayText style={{ opacity: isHovered ? 1 : 0 }}>
        {text}
      </OverlayText>
    </Box>
  );
};

export default Objective;
