import React, { useRef } from 'react';
import BUNavbar from '../../components/institucional/BUNavbar';
import BUImageCarousel from '../../components/institucional/BUImageCarousel';
import Servicios from '../../components/institucional/Servicios';
import Identidad from '../../components/institucional/Identidad';
import Contacto from '../../components/institucional/Contacto';
import BUFooter from '../../components/institucional/BUFooter';

const Institucional = () => {
    // Create refs for each section
    const serviciosRef = useRef(null);
    const identidadRef = useRef(null);
    const contactoRef = useRef(null);

    return (
        <>
            {/* Pass the refs down to the sections */}
            <BUNavbar serviciosRef={serviciosRef} identidadRef={identidadRef} contactoRef={contactoRef} />
            <BUImageCarousel serviciosRef={serviciosRef} identidadRef={identidadRef} contactoRef={contactoRef} />
            <Servicios ref={serviciosRef} />
            <Identidad ref={identidadRef} />
            <Contacto ref={contactoRef} />
            <BUFooter />
        </>
    );
};


export default Institucional;