// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Roboto, sans-serif',
    },
    h2: {
    fontFamily: 'Roboto, sans-serif', // For titles
    },
    h3: {
    fontFamily: 'Roboto, sans-serif', // For titles
    },
    button: {
      fontFamily: 'Montserrat Alternates, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Optional: You can customize this
          textTransform: 'none', // Optional: To remove uppercase styling
        },
        // Button with background (primary button)
        containedPrimary: {
          backgroundColor: '#49BEB7',
          color: '#fff',
          fontFamily: 'Roboto, sans-serif',
          '&:hover': {
            backgroundColor: '#39a59f', // Adjust hover color
          },
        },
        // Button without background (text button)
        textPrimary: {
          color: '#085F63',
          fontFamily: 'Montserrat Alternates, sans-serif',
          '&:hover': {
            backgroundColor: 'transparent', // No background on hover
            color: '#046060', // Darker hover color
          },
        },
      },
    },
  },
});

export default theme;
