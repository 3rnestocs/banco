import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/carousel1.png";
import img2 from "../../assets/img/carousel2.png";
import img3 from "../../assets/img/carousel3.png";
import img4 from "../../assets/img/carousel4.png";
import { Link } from "react-router-dom";

const BUImageCarousel = () => {
  return (
    <Carousel interval={null} indicators={true}>
      <Carousel.Item>
        <div className="carousel-image-container position-relative">
          <img className="d-block w-100" src={img1} alt="Slide 1" />
          <Link to="/login" className="btn-banca position-absolute bottom-0 start-25 translate-middle-x mb-3">

            Banca en Línea

          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container position-relative">
          <img className="d-block w-100" src={img2} alt="Slide 2" />
          <Link to="/login" className="btn-banca position-absolute bottom-0 start-25 translate-middle-x mb-3">

            Banca en Línea

          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container position-relative">
          <img className="d-block w-100" src={img3} alt="Slide 3" />
          <Link to="/login" className="btn-banca position-absolute bottom-0 start-25 translate-middle-x mb-3">

            Banca en Línea

          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container position-relative">
          <img className="d-block w-100" src={img4} alt="Slide 4" />
          <Link to="/login" className="btn-banca position-absolute bottom-0 start-25 translate-middle-x mb-3">

            Banca en Línea

          </Link>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BUImageCarousel;