import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/banco_logo.png";

export const Navbar = () => {
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
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/container-identidad">Conócenos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
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
