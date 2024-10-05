// src/theme.js
import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font for body text
    h1: {
      fontFamily: 'Roboto, sans-serif', // For titles
    },
    h2: {
      fontFamily: 'Roboto, sans-serif', // For titles
    },
    h3: {
      fontFamily: 'Roboto, sans-serif', // For titles
    },
    button: {
      fontFamily: 'Montserrat Alternates, sans-serif', // For buttons
    },
    subtitle1: {
      fontFamily: 'Montserrat Alternates, sans-serif', // For other texts like input labels, etc.
    },
    body1: {
      fontFamily: 'Roboto, sans-serif', // Normal body text
    },
  },
});

export default theme;
