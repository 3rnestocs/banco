import './App.css';
import { Routes, Route} from "react-router-dom";
import Institutional from "./routes/institutional/Institutional";
import Login from "./routes/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Institutional />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;