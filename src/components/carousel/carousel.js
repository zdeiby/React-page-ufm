import React from 'react';
import './carousel.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

 function Carousel(props) {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className={`w-100 d-block ${props.tamano?'img2':'img1'}`}
        itemId={1}
        src='https://unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/mejoramiento.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className={`w-100 d-block ${props.tamano?'img2':'img1'}`}
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className={`w-100 d-block ${props.tamano?'img2':'img1'}`}
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>
  );
}

export {Carousel}