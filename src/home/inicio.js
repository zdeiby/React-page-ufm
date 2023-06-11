import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Carousel } from "../components/carousel/carousel";
import { CarouselText } from "../components/carouselText";
import { Footer } from "../components/Footer/footer";
import { Nava } from "../components/Nav/nav";

function Inicio(){
    return(
        <>
<Container>
    <Nava></Nava>
    <Carousel></Carousel>
    <CarouselText></CarouselText>
</Container> 
<Footer></Footer>
</>
    )
}

export {Inicio}