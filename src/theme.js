// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'Roboto, sans-serif',
		h4: {
      fontWeight: 700, // Bold
    },
    h5: {
      fontWeight: 400, // Regular
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
