import React, { forwardRef, useState } from "react";
import imgMisio from "../../assets/img/imgMision.png";
import imgVisio from "../../assets/img/imgVisio.png";
import objetivo1 from "../../assets/img/objetivos/obj1.png";
import objetivo2 from "../../assets/img/objetivos/obj2.png";
import objetivo3 from "../../assets/img/objetivos/obj3.png";
import objetivo4 from "../../assets/img/objetivos/obj4.png";
import objetivo5 from "../../assets/img/objetivos/obj5.png";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';
import { Box } from "@mui/material";
import Objective from '../../components/Objective';
import ImageTextMision from "../ImageTextMision";
import ImageTextVision from "../ImageTextVision";
import ObjSmall1 from "../../assets/img/objetivos/ObjSmall1.png";
import ObjSmall2 from "../../assets/img/objetivos/ObjSmall2.png";
import ObjSmall3 from "../../assets/img/objetivos/ObjSmall3.png";
import ObjSmall4 from "../../assets/img/objetivos/ObjSmall4.png";
import ObjSmall5 from "../../assets/img/objetivos/ObjSmall5.png";
import MisionSmall from "../../assets/img/MisionSmall.png";
import VisionSmall from "../../assets/img/VisionSmall.png";

const objetivos = [
  { src: objetivo1, smallSrc: ObjSmall1, text: "Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros." },
  { src: objetivo2, smallSrc: ObjSmall2, text: "Fomentar el uso de nuestras plataformas para hacer transferencias sin comisión, depósitos y retiros de efectivo." },
  { src: objetivo3, smallSrc: ObjSmall3, text: "Promover la educación financiera de los estudiantes universitarios." },
  { src: objetivo4, smallSrc: ObjSmall4, text: "Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios a nuestros clientes." },
  { src: objetivo5, smallSrc: ObjSmall5, text: "Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios." },
];

const MisionVision = [
  { src: imgMisio, smallSrc: MisionSmall, text: "Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes." },
  { src: imgVisio, smallSrc: VisionSmall, text: "Queremos ser la mejor opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social." },
];




const Identidad = forwardRef((props, ref) => {
  const [hoveredIndexMV, setHoveredIndexMV] = useState(null);
  const [hoveredIndexObj, setHoveredIndexObj] = useState(null)

  return (
    <div id="container-identidad" className="container-fluid m-0">
      <Box
        id="container-identidad"
        sx={{ bgcolor: "background.default", m: 0, p: 5 }}
        ref={ref}
      >

        <Box sx={{ margin: theme => theme.spacing(1) }}> 
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <BUHeaderTitle text="IDENTIDAD EMPRESARIAL" type={HeaderTypes.WHITE} />
        </Box>

        <Box sx={{ textAlign: "center", mb: 3 }}>
        
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {MisionVision.map((img, index) => (
              <Box
                key={index}
                onMouseEnter={() => setHoveredIndexMV(index)}
                onMouseLeave={() => setHoveredIndexMV(null)}
                sx={{
                  width: "100%", 
                  height: "auto", 
                  maxWidth: "1600px",
                  margin: "20px",
                  
                 
                }}
              >
                {index === 0 ? (
                  <ImageTextMision src={img.src} smallSrc={img.smallSrc} text={img.text} isHovered={hoveredIndexMV === index} />
                ) : (
                  <ImageTextVision src={img.src} smallSrc={img.smallSrc} text={img.text} isHovered={hoveredIndexMV === index} />
                )}
              </Box>
            ))}
            </Box>
          </Box>
          
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <BUHeaderTitle text="OBJETIVOS" type={HeaderTypes.WHITE} />
       </Box>
       
        <Box sx={{ 
         display: { xs: "flex", lg: "flex" },
         flexDirection: { xs: "column", lg: "row" },
         justifyContent: "center", 
         textAlign: "center", 
         mb: 3 
         }}>

         {objetivos.map((obj, index) => (
          <Box
          key={index}
          onMouseEnter={() => setHoveredIndexObj(index)}
          onMouseLeave={() => setHoveredIndexObj(null)}
          sx={{  width: { xs:'auto', lg: "auto" } }} 
          >
        <Objective 
        src={obj.src}s
        smallSrc={obj.smallSrc} 
        text={obj.text} 
        isHovered={hoveredIndexObj === index} 
        />
        </Box>
          ))}
      </Box>
      </Box>
    </div>
  );
});

export default Identidad;
