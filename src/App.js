import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { whoAmI } from './redux/user/userSlice';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import DynamicRoutes from './components/DynamicRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem('bank_jwt');
    if (jwt) {
      dispatch(whoAmI(jwt)); // Validate the user's session with the token
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <DynamicRoutes />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;