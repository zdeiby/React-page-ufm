import React from 'react';
import { Carousel } from '../carousel/carousel';


const CarouselText = () => {
  return (
    <div className="container pt-4 text-center pb-4">
      <h3 className='pb-4' style={{ color: '#00B0F6' }}>¿Quienes somos?</h3>
      <div className="row">
        <div className='col'>
          <div className="container pt-4">
            <p>
              Somos una Unidad que pertenece a la <b style={{ color: '#00B0F6' }}>Secretaría de Inclusión Social,
               Familia y Derechos Humanos de la Alcaldía de Medellín</b>. Buscamos mejorar la calidad de vida de 
               las familias de Medellín y fortalecerlas como grupo fundamental de formación de seres humanos. 
               Además impulsamos la corresponsabilidad y la participación activa de la familia en la gestión de su 
               propio desarrollo. Nuestro trabajo está direccionado por la Política Pública para la Familia de Medellín aprobada por el acuerdo 054 de 2011 del Concejo de Medellín.
            </p>
          </div>
        </div>
        <div className='col'>
         <Carousel tamano={'img2'}></Carousel>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  );
};

export {CarouselText};
