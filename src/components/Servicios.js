import React from "react";
import collage from "../assets/img/collageServi.jpg";
import collageMobile from "../assets/img/collageServiMobile.jpg";

export const Servicios = () => {
  return (
    <div id="servicios" className="container mt-5 p-5">
      <h2 className="text-center mb-4 fw-bold text-primary text-decoration-underline">
        SERVICIOS
      </h2>
      <img src={collage} className="d-none d-lg-block img-fluid" alt="Servicios Collage" />
      <img
        src={collageMobile}
        className="d-lg-none d-sm-block d-md-block img-fluid"
        alt="Servicios Collage Mobile"
      />
    </div>
  );
};
