import React, { forwardRef } from "react";
import imgMisio from "../../assets/img/imgMision.png";
import imgVisio from "../../assets/img/imgVisio.png";
import groupMision from "../../assets/img/groupMision.png";
import groupVision from "../../assets/img/groupVision.png";
import objetivo1 from "../../assets/img/objetivos/obj1.png";
import objetivo2 from "../../assets/img/objetivos/obj2.png";
import objetivo3 from "../../assets/img/objetivos/obj3.png";
import objetivo4 from "../../assets/img/objetivos/obj4.png";
import objetivo5 from "../../assets/img/objetivos/obj5.png";
import objResponsive from "../../assets/img/objetivos/objResponsive.png";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';

const Identidad = forwardRef((props, ref) => {
  return (
    <div id="container-identidad" className="container-fluid text-center" ref={ref}>
      {/* Header Title */}
      <BUHeaderTitle text="IDENTIDAD EMPRESARIAL" type={HeaderTypes.WHITE} />
      
      {/* Container for Misión and Visión images */}
      <div className="container d-flex flex-column align-items-center">
        <img className="d-none d-lg-block img-fluid mb-3" src={imgMisio} alt="Misión" />
        <img className="d-none d-lg-block img-fluid mb-3" src={imgVisio} alt="Visión" />
        <img className="d-lg-none d-sm-block d-md-block img-fluid mb-3" src={groupMision} alt="Grupo Misión" />
        <img className="d-lg-none d-sm-block d-md-block img-fluid mb-3" src={groupVision} alt="Grupo Visión" />
      </div>
      
      {/* Another header title */}
      <BUHeaderTitle text="OBJETIVOS" type={HeaderTypes.WHITE} />

      {/* Desktop Objectives Images */}
      <div className="d-none d-lg-flex container justify-content-center text-center mb-3">
        <img className="img-fluid me-3" src={objetivo1} alt="Objetivo 1" />
        <img className="img-fluid me-3" src={objetivo2} alt="Objetivo 2" />
        <img className="img-fluid me-3" src={objetivo3} alt="Objetivo 3" />
        <img className="img-fluid me-3" src={objetivo4} alt="Objetivo 4" />
        <img className="img-fluid" src={objetivo5} alt="Objetivo 5" />
      </div>
      
      {/* Responsive Objective Image */}
      <div className="d-lg-none d-sm-block d-md-block container text-center mb-3">
        <img className="img-fluid" src={objResponsive} alt="Objetivos Responsivos" />
      </div>
    </div>
  );
});


export default Identidad;