import React, { forwardRef } from 'react';

import tranf from "../../assets/img/gridDesk/1.png";
import tranfhd from "../../assets/img/gridDesk/1hd.png";

import building from "../../assets/img/gridDesk/2.png";
import buildinghd from "../../assets/img/gridDesk/2hd.png";

import pmatricula from "../../assets/img/gridDesk/3.png";
import pmatriculahd from "../../assets/img/gridDesk/3hd.png";

import retiros from "../../assets/img/gridDesk/4.png";
import retiroshd from "../../assets/img/gridDesk/4hd.png";

import becas from "../../assets/img/gridDesk/5.png";
import becashd from "../../assets/img/gridDesk/5hd.png";

import dolar from "../../assets/img/gridDesk/6.png";
import dolarhd from "../../assets/img/gridDesk/6hd.png";

import depositos from "../../assets/img/gridDesk/7.png";
import depositoshd from "../../assets/img/gridDesk/7hd.png";

import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react'; // Importa useState para manejar el estado
import './servicios.css'; // Asegúrate de tener este archivo para los estilos

const itemData = [
  {
    src: tranf,
    hd: tranfhd,
    text: 'Transferencias entre estudiantes sin comisión',
  },
  {
    src: building,
    hd: buildinghd,
    text: '',
  },
  {
    src: pmatricula,
    hd: pmatriculahd,
    text: 'Pago de Matricula estudiantil',
  },
  {
    src: retiros,
    hd: retiroshd,
    text: 'Retiros en efectivo',
  },
  {
    src: becas,
    hd: becashd,
    text: 'Cobro de becas',
  },
  {
    src: dolar,
    hd: dolarhd,
    text: '',
  },
  {
    src: depositos,
    hd: depositoshd,
    text: 'Depósitos en efectivo',
  },
];

const Servicios = forwardRef((props, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para rastrear el índice del hover
  return (
    <Box
      id="servicios"
      sx={{
        mt: 5,
        p: 5,
        textAlign: "center",
      }}
      ref={ref}
    >
      <BUHeaderTitle text="SERVICIOS" type={HeaderTypes.SECONDARY} marginTop='0em' />
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <ImageList rowHeight={'auto'} cols={4}>
          <ImageList cols={1}>
            <ImageListItem>
              <div
                className="imageContainer"
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={hoveredIndex === 0 ? itemData[0].hd : itemData[0].src} alt={itemData[0].text} />
                <span className="imageText">{itemData[0].text}</span>
              </div>
            </ImageListItem>

            <ImageListItem cols={1}>
              <div
                className="imageContainer"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={hoveredIndex === 1 ? itemData[1].hd : itemData[1].src} alt={itemData[1].text} />
                <span className="imageText">{itemData[1].text}</span>
              </div>
            </ImageListItem>
          </ImageList>

          <ImageListItem rows={1} cols={2}>
            <div
              className="imageContainer"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === 2 ? itemData[2].hd : itemData[2].src} alt={itemData[2].text} />
              <span className="imageText">{itemData[2].text}</span>
            </div>
          </ImageListItem>

          <ImageList cols={1}>
            <ImageListItem cols={1}>
              <div
                className="imageContainer"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={hoveredIndex === 3 ? itemData[3].hd : itemData[3].src} alt={itemData[3].text} />
                <span className="imageText">{itemData[3].text}</span>
              </div>
            </ImageListItem>

            <ImageList cols={2}>
              <ImageListItem cols={1}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => setHoveredIndex(4)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={hoveredIndex === 4 ? itemData[4].hd : itemData[4].src} alt={itemData[4].text} />
                  <span className="imageText">{itemData[4].text}</span>
                </div>
              </ImageListItem>

              <ImageListItem cols={1}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => setHoveredIndex(5)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={hoveredIndex === 5 ? itemData[5].hd : itemData[5].src} alt={itemData[5].text} />
                  <span className="imageText">{itemData[5].text}</span>
                </div>
              </ImageListItem>

              <ImageListItem rows={2} cols={2}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => setHoveredIndex(6)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={hoveredIndex === 6 ? itemData[6].hd : itemData[6].src} alt={itemData[6].text} />
                  <span className="imageText">{itemData[6].text}</span>
                </div>
              </ImageListItem>
            </ImageList>
          </ImageList>
        </ImageList>
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <ImageList rowHeight={'auto'} gap={8} cols={1}>
          <ImageListItem>
            <div
              className="imageContainer container-responsive"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === 0 ? itemData[0].hd : itemData[0].src} alt={itemData[0].text} />
              <span className="imageText">{itemData[0].text}</span>
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              className="imageContainer container-responsive"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === 0 ? itemData[2].hd : itemData[2].src} alt={itemData[0].text} />
              <span className="imageText">{itemData[2].text}</span>
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              className="imageContainer container-responsive"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === 0 ? itemData[4].hd : itemData[4].src} alt={itemData[0].text} />
              <span className="imageText">{itemData[4].text}</span>
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              className="imageContainer container-responsive"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === 0 ? itemData[6].hd : itemData[6].src} alt={itemData[0].text} />
              <span className="imageText">{itemData[6].text}</span>
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              className="imageContainer container-responsive"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={hoveredIndex === 0 ? itemData[3].hd : itemData[3].src} alt={itemData[0].text} />
              <span className="imageText">{itemData[3].text}</span>
            </div>
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
});

export default Servicios;