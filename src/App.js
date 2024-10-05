import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Optional: For Material UI reset
import theme from './theme'; // Import the custom theme
import { Routes, Route} from "react-router-dom";
import Institutional from "./routes/institutional/Institutional";
import Login from "./routes/login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Optional: For consistent reset of global styles */}
      <Routes>
        <Route path="/" element={<Institutional />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </ThemeProvider>
  );
}
export default App;