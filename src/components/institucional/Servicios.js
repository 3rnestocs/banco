import React, { forwardRef } from 'react';
import collage from "../../assets/img/collageServi.jpg";
import collageMobile from "../../assets/img/collageServiMobile.jpg";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';

const Servicios = forwardRef((props, ref) => {
  return (
    <div id="servicios" className="container p-5 text-center" ref={ref}>
      <BUHeaderTitle text="SERVICIOS" type={HeaderTypes.SECONDARY} />
      <img src={collage} className="d-none d-lg-block img-fluid" alt="Servicios Collage" />
      <img
        src={collageMobile}
        className="d-lg-none d-sm-block d-md-block img-fluid"
        alt="Servicios Collage Mobile"
      />
    </div>
  );
});


export default Servicios;