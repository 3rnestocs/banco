import React from "react";
import imgMisio from "../assets/img/imgMision.png";
import imgVisio from "../assets/img/imgVisio.png";
import groupMision from "../assets/img/groupMision.png";
import groupVision from "../assets/img/groupVision.png";
import objetivo1 from "../assets/img/objetivos/obj1.png";
import objetivo2 from "../assets/img/objetivos/obj2.png";
import objetivo3 from "../assets/img/objetivos/obj3.png";
import objetivo4 from "../assets/img/objetivos/obj4.png";
import objetivo5 from "../assets/img/objetivos/obj5.png";
import objResponsive from "../assets/img/objetivos/objResponsive.png";

export const Identidad = () => {
  return (
    <div id="container-identidad" className="container-fluid m-0">
      <h2 className="text-light text-center m-3 text-decoration-underline">
        Identidad Empresarial
      </h2>
      <div className="container text-center">
        <img className="d-none d-lg-block img-fluid" src={imgMisio} alt="Misión" />
        <img className="d-none d-lg-block img-fluid" src={imgVisio} alt="Visión" />
        <img
          className="d-lg-none d-sm-block d-md-block img-fluid"
          src={groupMision}
          alt="Grupo Misión"
        />
        <img
          className="d-lg-none d-sm-block d-md-block img-fluid"
          src={groupVision}
          alt="Grupo Visión"
        />
      </div>
      <h2 className="text-light text-center fw-bold m-3">Objetivos</h2>
      <div className="d-none d-lg-block container text-center mb-3">
        <img className="img-fluid" src={objetivo1} alt="Objetivo 1" />
        <img className="img-fluid" src={objetivo2} alt="Objetivo 2" />
        <img className="img-fluid" src={objetivo3} alt="Objetivo 3" />
        <img className="img-fluid" src={objetivo4} alt="Objetivo 4" />
        <img className="img-fluid" src={objetivo5} alt="Objetivo 5" />
      </div>
      <div className="d-lg-none d-sm-block d-md-block container text-center mb-3">
        <img className="img-fluid" src={objResponsive} alt="Objetivos Responsivos" />
      </div>
    </div>
  );
};
