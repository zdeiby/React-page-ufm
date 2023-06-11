import React from "react";
import { Nava } from "../components/Nav/nav";
import { Footer } from "../components/Footer/footer";
import { Container } from "react-bootstrap";

function Ufm(){
    return(
        <>
        <Nava></Nava>
        <Container  className=" text-center mt-4 mb-4">
       
             <h5 className='mb-4'>¿Quienes somos?</h5>
    <label className='mb-4' for="">Somos una Unidad que pertenece a la Secretaría de Inclusión Social, Familia y Derechos Humanos de la Alcaldía de Medellín. 
        Buscamos mejorar la calidad de vida de las familias de Medellín y fortalecerlas como grupo fundamental de formación de seres humanos.
         Además impulsamos la corresponsabilidad y la participación activa de la familia en la gestión de su propio desarrollo. Nuestro trabajo 
         está direccionado por la Política Pública para la Familia de Medellín aprobada por el acuerdo 054 de 2011 del Concejo de Medellín.</label>
         <h5 className='mb-4'>¿Cómo trabajamos?</h5>
    <label className='mb-4' for="">Desarrollamos estrategias de promoción, prevención, atención, protección y realizamos acercamiento de oportunidades para transformar 
        a la familia independiente de sus características condiciones o grupo poblacional. Trabajamos con más de 600 personas que se encuentran distribuidas en nueve 
        Centros Integrales para la Familia ubicados en toda la ciudad. A través de los Centros Integrales para la familia ejecutamos la estrategia familia Medellín
         de la siguiente manera: Gráfico.</label>
         <img width='80%' src="https://www.unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/cif.png" alt=""/>
         <h5 className='mb-4'>¿Quiénes pueden acceder a los Centros Integrales para la Familia?</h5>
    <label className='mb-4' for="">Todos los ciudadanos y familias que pertenecen a las 16 comunas y 5 corregimientos del Municipio de Medellín.</label> 
        </Container>
      
        <Footer></Footer>
        </>
    )
}
export {Ufm}