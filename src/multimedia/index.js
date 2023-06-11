import React from "react";
import { Footer } from "../components/Footer/footer";
import { Gallery } from "../components/galeria";
import { Nava } from "../components/Nav/nav";

function Multimedia(){
    return(
        <>
       <Nava></Nava>
        <Gallery></Gallery>
        <Footer></Footer>
        </>
    )
}

export {Multimedia}