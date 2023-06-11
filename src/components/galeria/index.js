


import React, { useState } from 'react';
import './galeria.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(2); // Cambiar el índice por defecto según tu preferencia

  const images = [
    'https://vivirenelpoblado.com/wp-content/uploads/2022/04/La-alcaldia-de-Medellin-instala-un-Centro-Integral-de-Familia-en-la-UdeA-03-1200x800.jpg',
    'https://www.unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/medsol1.jpg',
    'https://www.unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/medsol8.jpg',
    // Agrega aquí más URLs de imágenes
  ];

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : images.length - 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  // Establecer la imagen seleccionada inicialmente
  useState(() => {
    setSelectedImage(images[currentIndex]);
  }, []);

  return (
    <div className='container'>
      <div className="gallery">
        {selectedImage && (
          <div className="selected-image">
            <img src={selectedImage} alt="Selected Image" />
          </div>
        )}
        <div className="thumbnails">
          <button className="arrow prev" onClick={handlePrevImage}>
            &lt;
          </button>
          <ul>
            {images.map((imageUrl, index) => (
              <li key={index} className={`thumbnail ${currentIndex === index ? 'active' : ''}`}>
                <button onClick={() => handleImageClick(imageUrl, index)}>
                  <img src={imageUrl} alt={`Image ${index}`} width="100" height="auto" />
                </button>
              </li>
            ))}
          </ul>
          <button className="arrow next" onClick={handleNextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export { Gallery };
