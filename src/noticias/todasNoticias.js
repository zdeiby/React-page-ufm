import React from "react";
import { Nava } from "../components/Nav/nav";
import { Footer } from "../components/Footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import { Gallery } from "../components/galeria";

function Todas(){
    return(
        <>
        <Nava></Nava>
        <Container className="divNoticia pb-3">
            <Row className="text-center notice ">
                
                <Col sm={4}>
                    <img width="100%" src="https://vivirenelpoblado.com/wp-content/uploads/2022/04/La-alcaldia-de-Medellin-instala-un-Centro-Integral-de-Familia-en-la-UdeA-03-1200x800.jpg"/>
                </Col>
                <Col sm={6} className="pt-4">
                <p><b>Titulo de la noticia</b></p>
                <p>fecha: 11 de junio de 2023</p>
                </Col>
            </Row>
        </Container>
        <Container className="divNoticia pb-3">
            <Row className="text-center notice ">
                
                <Col sm={4}>
                    <img width="100%" src="https://vivirenelpoblado.com/wp-content/uploads/2022/04/La-alcaldia-de-Medellin-instala-un-Centro-Integral-de-Familia-en-la-UdeA-03-1200x800.jpg"/>
                </Col>
                <Col sm={6} className="pt-4">
                <p><b>Titulo de la noticia</b></p>
                <p>fecha: 11 de junio de 2023</p>
                </Col>
            </Row>
        </Container>
        <Container className="divNoticia pb-3">
            <Row className="text-center notice ">
                
                <Col sm={4}>
                    <img width="100%" src="https://vivirenelpoblado.com/wp-content/uploads/2022/04/La-alcaldia-de-Medellin-instala-un-Centro-Integral-de-Familia-en-la-UdeA-03-1200x800.jpg"/>
                </Col>
                <Col sm={6} className="pt-4">
                <p><b>Titulo de la noticia</b></p>
                <p>fecha: 11 de junio de 2023</p>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
      
        </>
    )
}

export {Todas}