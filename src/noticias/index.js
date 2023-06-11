import React from "react";
import { Footer } from "../components/Footer/footer";
import { Nava } from "../components/Nav/nav";
import { Container, Col, Row } from "react-bootstrap";
import './noticias.css'
import { Link } from "react-router-dom";


function Noticias(){
    return(
        <>
        <Nava></Nava>
        <Container>
            <Row>
                <Col  sm={8}>
                    <label className="mb-3" >ÚLTIMAS NOTICIAS</label>
                <img className="pb-2"width={'100%'} src='https://vivirenelpoblado.com/wp-content/uploads/2022/04/La-alcaldia-de-Medellin-instala-un-Centro-Integral-de-Familia-en-la-UdeA-03-1200x800.jpg'/>
               
                <label className="pb-3"><b>Creada por:</b> nombre el 9 de mayo de 2023</label> 
                <h5 className="text-center pb-3">Titulo de la noticia</h5>
                <p className="">Line 16:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative imageLine 16:17: 
                         img elements must have an alt prop, either with meaningful text, or an empty string for decorative imageEste lunes inició una convocatoria histórica para la educación superior en Medellín. Gracias a la gestión de la Agencia de Educación Postsecundaria (Sapiencia), por primera vez los maestros del Distrito recibirán 217 becas del 100 % para adelantar posgrados en instituciones aliadas, a través de los Fondos Sapiencia 2023-2.

                        La convocatoria incluye, además, más de 4.000 cupos para que la ciudadanía acceda a pregrado, posgrado nacional o internacional, con la modalidad de créditos condonables, es decir, que se pueden redimir con méritos académicos, servicio social y la culminación de la carrera.

                        “Este es un programa aparte de la Matrícula Cero. Con la Matrícula Cero cubrimos el 100 % de la matrícula de los que están en las instituciones de educación superior, de carácter público. De tal manera que, con estos fondos de hoy, más la Matrícula Cero, estaremos haciendo realidad el incremento de oportunidades para que hablemos de una ciudad que se transforma con la educación”, precisó el director de Sapiencia, Carlos Alberto Chaparro.

                        Desde el primer semestre de 2020 hasta la fecha, cerca de 8.000 habitantes de Medellín han accedido a la educación superior, gracias a los Fondos Sapiencia, denominados también Fondo EPM-Universidades, Presupuesto Participativo, Enlaza Mundos, Formación Avanzada, Extendiendo Fronteras y Becas Mejores Deportistas. Con la convocatoria 2023-2 se alcanzarán más de 12.000 beneficiarios en el cuatrienio, récord en la historia de esta iniciativa.

                        “Gracias al fondo he podido avanzar en mis estudios, formarme como profesional, como persona y nutrir significativamente esos procesos con nuestros chicos en los contextos en los que me desenvuelvo como maestra, como docente de Medellín. Estoy maravillada, porque he desarrollado mi maestría en educación en México, con la Universidad UNITEC. Ya en noviembre termino y quiero, definitivamente, continuar en el fondo con el doctorado”, dijo Francy Elizabeth Martínez, una de las usuarias del programa.

                        Para ser beneficiario de los Fondos Sapiencia no hay límite de edad. Sin embargo, cada modalidad tiene requisitos específicos, los cuales están descritos en el decreto reglamentario 032-202. Las personas interesadas pueden ingresar a www.sapiencia.gov.co para ampliar información e inscribirse.

                        Los créditos y becas se otorgarán de acuerdo con la cantidad de cupos </p>
                </Col>
                <Col>
                <Row><Col><label>Otras Noticias</label></Col>
                <Col><Link to='mas-noticias'><label ><b>Ver todas las noticias</b></label></Link></Col></Row>
                
                
                <div className="scrollable-container pt-3">
                    <label className="pb-3"><b>Titulo de la Noticia</b></label>
                    <img className="foto pb-3" width={'90%'} src='https://sapiencia.gov.co/wp-content/uploads/2023/05/fotos-fondos-sapiencia-2023-2.jpg'/>
                    <p className="parrafo">Line 16:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative imageLine 16:17: 
                         img elements must have an alt prop, either with meaningful text, or an empty string for decorative image</p>
                   

                         <label className="pb-3"><b>Titulo de la Noticia</b></label>
                    <img className="foto pb-3" width={'90%'} src='https://www.unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/medsol12.jpg'/>
                    <p className="parrafo">Line 16:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative imageLine 16:17: 
                         img elements must have an alt prop, either with meaningful text, or an empty string for decorative image</p>

                </div>  
                </Col>
            </Row>
           
        </Container>
        <Footer></Footer>
        </>
    )
}

export {Noticias}