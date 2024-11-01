import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import img1 from "../../assets/img/carousel1.png";
import img2 from "../../assets/img/carousel2.png";
import img3 from "../../assets/img/carousel3.png";
import img4 from "../../assets/img/carousel4.png";
import BUButton from "../BUButton";
import "../../index.css"

const images = [img1, img2, img3, img4];

const buttons = [
  { text: "Banca en linea", link: "/login" },
  { text: "Servicios", ref: "serviciosRef" },
  { text: "Conócenos", ref: "identidadRef" },
  { text: "Contacto", ref: "contactoRef" },
];

const BUImageCarousel = ({ serviciosRef, identidadRef, contactoRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("none");
  const [isLoaded, setIsLoaded] = useState(false); // To prevent animation on initial load
  const navigate = useNavigate();
  const autoSlideTimeout = useRef(null);

  const sectionRefs = {
    serviciosRef,
    identidadRef,
    contactoRef,
  };

  useEffect(() => {
    setIsLoaded(true); // Enables animations after initial load
    startAutoSlide(); // Start automatic slide on component mount

    return () => clearTimeout(autoSlideTimeout.current); // Cleanup timeout on unmount
  }, []);

  const startAutoSlide = () => {
    autoSlideTimeout.current = setTimeout(() => {
      handleNext();
    }, 4000); // Adjust interval for automatic sliding as desired
  };

  const resetAutoSlide = () => {
    clearTimeout(autoSlideTimeout.current);
    startAutoSlide();
  };

  const handleNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  const handleDotClick = (index) => {
    if (index > currentIndex) {
      setSlideDirection("right");
    } else if (index < currentIndex) {
      setSlideDirection("left");
    }
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const handleButtonClick = () => {
    const button = buttons[currentIndex];
    if (button.link) {
      navigate(button.link);
    } else if (button.ref) {
      sectionRefs[button.ref]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div className={`carousel-container`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", height: "auto" }}
          className={`carousel-image ${isLoaded ? slideDirection : ""}`} 
        />
      </div>
      <Box
        onClick={handleButtonClick}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <BUButton
          text={buttons[currentIndex].text}
          horizontalPadding="50px"
          fontFamily="Roboto"
          fontWeight="300"
        />
      </Box>
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
              backgroundColor: currentIndex === index ? "white" : "darkgray",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BUImageCarousel;
