import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/banco_logo.png";
import { Button } from "@mui/material";

const BUNavbar = ({ serviciosRef, identidadRef, contactoRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <div className="row">
          <Link className="col-5 navbar-brand" to="/home">
            <img src={logo} className="img-fluid" height={48} alt="Logo" />
          </Link>
          <button className="navbar-toggler col-auto" type="button" aria-label="Toggle navigation">
            {/* Aquí puedes implementar la funcionalidad para el colapso */}
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-auto">
          <li className="nav-item">
              <Button onClick={() => handleScroll(serviciosRef)}>Servicios</Button>
            </li>
            <li className="nav-item">
              <Button onClick={() => handleScroll(identidadRef)}>Conócenos</Button>
            </li>
            <li className="nav-item">
              <Button onClick={() => handleScroll(contactoRef)}>Contacto</Button>
            </li>
          </ul>
          <Link to="/login">
            <button className="btn btn-primary rounded-4 me-4" type="button">
              Banca en Línea
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BUNavbar;