import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

function Slider() {
  const images = [
    '/img/imagen1.jpg',
    '/img/imagen2.jpg',
    '/img/imagen3.jpg',
  ];

  const links = [
    '/Biografia',
    '/Intereses',
    '/Contacto',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <Link to={links[currentImageIndex]} className="slider-link">
          <img
            src={process.env.PUBLIC_URL + images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className="slider-image"
          />
        </Link>
      </div>
      <button onClick={prevImage} className="slider-button prev-button">Anterior</button>
      <button onClick={nextImage} className="slider-button next-button">Siguiente</button>
    </div>
  );
}

export default Slider;
