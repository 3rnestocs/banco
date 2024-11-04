import React from "react";
import logo_white from "../../assets/img/logo_blanco.png";
import iconMail from "../../assets/img/iconMail.png";
import iconPhone from "../../assets/img/iconPhone.png";
import iconUbicacion from "../../assets/img/iconUbicacion.png";
import iconFax from "../../assets/img/iconFax.png";
import iconFb from "../../assets/img/iconFb.png";
import iconTw from "../../assets/img/iconTw.png";
import iconIg from "../../assets/img/iconIg.png";
import favicon from "../../assets/favicon.ico";

export const BUFooter = () => {
  return (
    <div className="container-fluid bg-gradient-primary text-light">
      <div className="row bg-footer-gradient py-4">
        <div className="col-lg-4 d-none d-lg-block border-end border-light">
          <img src={logo_white} className="img-fluid d-lg-block me-1" alt="Logo Banco Universitario" />
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12">
          <span className="d-flex mb-3">
            <img className="me-1" src={iconMail} alt="Email" />
            <span>info@bancouniversitario.com.ve</span>
          </span>
          <span className="d-flex mb-3">
            <img className="me-1" src={iconPhone} alt="Teléfono" />
            <span>+58 212-555-5555</span>
          </span>
          <span className="d-flex mb-3">
            <img className="me-1" src={iconFax} alt="Fax" />
            <span>+58 212-555-5556</span>
          </span>
          <span className="d-flex mb-3">
            <img className="me-1" src={iconUbicacion} alt="Ubicación" />
            <span>
              Av. Universidad, Edificio Banco Universitario, piso 12, Caracas,
              Venezuela.
            </span>
          </span>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12 text-center">
          <a 
            href="https://www.facebook.com/bancouniversitariove" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="d-lg-flex mb-3" 
            style={{ color: 'white', textDecoration: 'none' }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.textDecoration = 'none'; }}
          >
            <img className="me-1" src={iconFb} alt="Facebook" />
            <span className="d-none d-lg-inline">@bancouniversitariove</span>
          </a>
          <a 
            href="https://twitter.com/bancouniversitariove" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="d-lg-flex mb-3" 
            style={{ color: 'white', textDecoration: 'none' }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.textDecoration = 'none'; }}
          >
            <img className="me-1" src={iconTw} alt="Twitter" />
            <span className="d-none d-lg-inline">@bancouniversitariove</span>
          </a>
          <a 
            href="https://www.instagram.com/bancouniversitariove" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="d-lg-flex mb-3" 
            style={{ color: 'white', textDecoration: 'none' }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.textDecoration = 'none'; }}
          >
            <img className="me-1" src={iconIg} alt="Instagram" />
            <span className="d-none d-lg-inline">@bancouniversitariove</span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col bg-primary text-center">
          <span className="d-block">
            <img src={favicon} alt="Favicon" />
            <span>Derechos protegidos por Banco Universitario | 2024</span>
          </span>
        </div>
      </div>
    </div>
  );
};
