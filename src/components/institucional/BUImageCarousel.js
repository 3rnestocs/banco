import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import img1 from "../../assets/img/carousel1.png";
import img2 from "../../assets/img/carousel2.png";
import img3 from "../../assets/img/carousel3.png";
import img4 from "../../assets/img/carousel4.png";
import BUButton from "../BUButton";

const images = [img1, img2, img3, img4];


const buttons = [
  { text: "Banca en linea", link: "/login" },
  { text: "Servicios", link: "/servicio" },
  { text: "Conócenos", link: "/identidad" },
  { text: "Contacto", link: "/contacto" }, 
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "100%", height: "auto" }}
      />
      <Link
        to={buttons[currentIndex].link} // Usa el enlace del botón correspondiente
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          textDecoration: "none",
        }}
      >
        <BUButton
          text={buttons[currentIndex].text} // Usa el texto del botón correspondiente
          horizontalPadding="50px"
          fontFamily="Roboto"
          fontWeight="300"
        />
      </Link>
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", top: "50%", left: "16px", zIndex: 1 }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", top: "50%", right: "16px", zIndex: 1 }}
      >
        <KeyboardArrowRight />
      </IconButton>
      <Box sx={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex" }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "black" : "lightgray",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ImageCarousel;
