import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import DynamicRoutes from './components/DynamicRoutes';
import { Navbar } from "./components/Navbar";
import { ImageCarousel } from "./components/ImageCarousel";
import { Footer } from "./components/Footer";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import {Servicios} from './components/Servicios'; 
import {Identidad} from './components/Identidad'; 
import {Contacto} from './components/Contacto'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/container-identidad" element={<Identidad />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/" element={
            <>
              <Navbar />
              <ImageCarousel />
              <Servicios />
              <Identidad />
              <DynamicRoutes />
              <Contacto />
              <Footer />
            </>
          } />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
