import React, { forwardRef, useState } from "react";
import objetivo1 from "../../assets/img/objetivos/obj1.png";
import objetivo2 from "../../assets/img/objetivos/obj2.png";
import objetivo3 from "../../assets/img/objetivos/obj3.png";
import objetivo4 from "../../assets/img/objetivos/obj4.png";
import objetivo5 from "../../assets/img/objetivos/obj5.png";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';
import { Box } from "@mui/material";
import Objective from '../../components/Objective';
import ObjSmall1 from "../../assets/img/objetivos/ObjSmall1.png";
import ObjSmall2 from "../../assets/img/objetivos/ObjSmall2.png";
import ObjSmall3 from "../../assets/img/objetivos/ObjSmall3.png";
import ObjSmall4 from "../../assets/img/objetivos/ObjSmall4.png";
import ObjSmall5 from "../../assets/img/objetivos/ObjSmall5.png";
// import imgMisio from "../../assets/img/imgMision.png";
// import imgVisio from "../../assets/img/imgVisio.png";
// import imgMision2 from "../../assets/img/imgMision2.png";
// import imgVision2 from "../../assets/img/imgVision2.png";

const objetivos = [
  { src: objetivo1, smallSrc: ObjSmall1, text: "Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros." },
  { src: objetivo2, smallSrc: ObjSmall2, text: "Fomentar el uso de nuestras plataformas para hacer transferencias sin comisión, depósitos y retiros de efectivo." },
  { src: objetivo3, smallSrc: ObjSmall3, text: "Promover la educación financiera de los estudiantes universitarios." },
  { src: objetivo4, smallSrc: ObjSmall4, text: "Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios a nuestros clientes." },
  { src: objetivo5, smallSrc: ObjSmall5, text: "Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios." },
];

// const MisionVision = [
//   { src: imgMisio, smallSrc: imgMision2, text: "Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes." },
//   { src: imgVisio, smallSrc: imgVision2, text: "Queremos ser la mejor opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social." },
// ];

const Identidad = forwardRef((props, ref) => {
  const [hoveredIndexObj, setHoveredIndexObj] = useState(null);

  return (
    <Box
      id="container-identidad"
      sx={{
        bgcolor: "background.default",
        p: 5
      }}
      ref={ref}
    >
      <Box sx={{ margin: theme => theme.spacing(1) }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <BUHeaderTitle text="OBJETIVOS" type={HeaderTypes.WHITE} />
          </Box>

          {/* Pantallas grandes objetivos*/}
          <Box sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
            mb: 3,
          }}>
            {objetivos.map((obj, index) => (
              <Box
                key={index}
                onMouseEnter={() => setHoveredIndexObj(index)}
                onMouseLeave={() => setHoveredIndexObj(null)}
                sx={{ width: "auto", margin: "10px" }}
              >
                <Objective 
                  src={obj.src} 
                  smallSrc={obj.smallSrc} 
                  text={obj.text} 
                  isHovered={hoveredIndexObj === index} 
                />
              </Box>
            ))}
          </Box>

          {/* Pantallas pequeñas objetivos*/}
          <Box sx={{ display: { xs: "flex", lg: "none" }, flexDirection: "column", alignItems: "center"}}>
          {objetivos.map((obj, index) => (
          <Box key={index} sx={{ width: "100%", margin: "-20px" }}> {/* Ajusta el margin aquí */}
          <Objective 
           src={obj.smallSrc} 
           smallSrc={obj.smallSrc} 
           text={obj.text} 
           isHovered={false} 
          />
         </Box>
         ))}
        </Box>
       </Box>
      </Box>
    // </div>
  );
});

export default Identidad;