import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import img1 from "../../assets/img/carousel1.png";
import img2 from "../../assets/img/carousel2.png";
import img3 from "../../assets/img/carousel3.png";
import img4 from "../../assets/img/carousel4.png";

const images = [img1, img2, img3, img4];

const BUImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          borderRadius: "4rem",
          zIndex: 1, // Asegura que esté por encima de las imágenes
        }}
      >
        Banca en Línea
      </Button>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 20, // Cambiado a la derecha
          display: "flex",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              margin: 1,
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "white" : "grey.400", // Cambiado a blanco
              transition: "background-color 0.3s",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default BUImageCarousel;