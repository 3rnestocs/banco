// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'Roboto, sans-serif',
		h4: {
      fontWeight: 500, // Medium
    },
    h5: {
      fontWeight: 500, // Medium
			color: '#085F63', // Main teal text color
    },
		body1: {
			fontSize: '1em',
			color: '#727374', // Dark gray text color
		},
		body2: {
			fontSize: '1em',
			color: '#313131', // Black text color
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-input': {
						fontFamily: 'Montserrat Alternates, sans-serif', // Font for TextFields
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
			  root: {
				'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
				  borderColor: '#085F63', // Change the outline color when focused
				},
			  },
			  notchedOutline: {
				borderColor: '#ccc', // Optional: Default outline color
			  },
			},
		  },
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px', // Optional: You can customize this
					textTransform: 'none', // Optional: To remove uppercase styling
					fontSize: '1em', // Optional: Adjust button font size
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
					fontWeight: 700, // Medium
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
