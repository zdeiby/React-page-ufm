import React from "react";
import { Nava } from "../components/Nav/nav";
import { Footer } from "../components/Footer/footer";

function Contactenos(){
    return(
        <>
            <Nava></Nava>
            <div class="container text-center" >
<h5 class="text-center pt-3 pb-3">PUNTOS DE ATENCIÓN</h5>
<table class="table text-center">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td><b>Aranjuez</b> - Carrera 50ª No. 93 – 39</td>
    </tr>
    <tr>
      <td><b>Castilla</b> - Calle 101 No. 65 – 19</td>
    </tr>
    <tr>
      <td><b>Caunces</b> - Carrera 6 AB No. 47 A – 99</td>
    </tr>
    <tr>
      <td><b>Estadio</b> - Calle 49B NO. 77C 71</td>
    </tr>
    <tr>
      <td><b>La América</b> - Carrera 92 No. 34 D – 93</td>
    </tr>
    <tr>
      <td><b>Manrique</b> - Carrera 48 No. 63 - 33</td>
    </tr>
    <tr>
      <td><b>Moravia</b> - Carrera 51 B 88 - 6</td>
    </tr>
    <tr>
      <td><b>Quintana</b> - Carrera 80 82 60</td>
    </tr>
    <tr>
      <td><b>San Javier</b> - Calle 42 C 95 50</td>
    </tr>
  </tbody>
</table>
<img class="pb-4" width='100%' src="https://www.unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/maps.png" alt=""/>
</div>
            <Footer></Footer>
        </>
    )
}

export {Contactenos}