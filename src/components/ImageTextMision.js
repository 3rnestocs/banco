import { styled } from '@mui/system';
import React from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';

const OverlayText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 800,
  right: 0,
  bottom: 0,
  backgroundColor: 'White',
  color: 'black',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.5s ease-in-out',
  '@media (max-width: 768px)': {
    fontSize: '0.8rem', 
    left: 280,
  },
  '@media (max-width: 360px)': {
    fontSize: '0.8rem', 
    left: 280,
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  borderRadius: '0',
  padding: '5px 20px', 
  color: '#085F63', 
  fontWeight: 'Montserrat Alternates',
  zIndex: 2,
  position: 'absolute',
  bottom: '0', 
  left: '50%',
  transform: 'translateX(-50%)', 
  fontSize: '1.5rem', 
  '@media (max-width: 768px)': {
    fontSize: '0.8rem', 
    padding: '3px 15px', 
  },
}));

const ImageWithText = ({ src, smallSrc, text, isHovered }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        margin: { xs: '10px', sm: '20px' },
      }}
    >
      <img
        src={isSmallScreen ? smallSrc : src}
        alt={text}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "1600px",
          transition: 'transform 0.5s ease-in-out',
          transform: isHovered ? 'translate(-250px, 0)' : 'translate(0, 0)',
      
        }}
      />
      <OverlayText style={{ opacity: isHovered ? 1 : 0 }}>
        {text}
      </OverlayText>
      <ButtonStyled>
        MISION
      </ButtonStyled>
    </Box>
  );
};

export default ImageWithText;
