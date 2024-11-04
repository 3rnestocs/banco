import { styled } from '@mui/system';
import React from 'react';
import { Box, Button} from '@mui/material';

const OverlayText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 800,
  bottom: 0,
  backgroundColor: 'White',
  color: 'black',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.8rem',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.5s ease-in-out',
  
}));
const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo claro
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
  '@media (min-width: 200px) and (max-width: 600px)': {
    fontSize: '0.5rem', 
    padding: '2px 10px', 
  },
}));

const ImageWithText= ({ src, text, isHovered }) => {
  
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
        src={src}  
        alt={text} 
        style={{ 
          width: "100%",
          height: "auto", 
          maxWidth: "1600px", 
          transition: 'transform 0.5s ease-in-out', 
          transform: isHovered ? 'translate(300px,  0)' : 'translate(0, 0)', 
        
        }} 
      />
      <OverlayText style={{ opacity: isHovered ? 1 : 0 }}>
        {text}
      </OverlayText>
      <ButtonStyled>
          VISION
        </ButtonStyled>
    </Box>
  );
};

export default ImageWithText; 