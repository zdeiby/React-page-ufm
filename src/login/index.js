import React from 'react';
import './login.css'
import { Nava } from '../components/Nav/nav';
import { Footer } from '../components/Footer/footer';
const Login = () => {
  return (
    <>
    <Nava></Nava>
    <div className="container log">
     
      <div><br /></div>
      <br /><br />
      <div className="row">
        <div className="col-md-offset-5">
          <div className="container well form-group col-md-5 pt-4 pb-4" style={{ background: '#f5f5f5', borderRadius: '2%', border: '1px solid #e3e3e3' }}>
            <div className="panel panel-success text-center pb-3" style={{ border: '2px solid #dff0c0', borderRadius: '2%' }}>
              <div className="panel-heading">
                <h3 className="panel-title text-center color">Autenticación</h3>
              </div>
              <div className="panel-body">
                Por favor digite su usuario y contrasena
              </div>
            </div>
            <div className="form-group mt-3 mb-4">
              <label className="pb-2" htmlFor="documento"><b>Usuario</b></label>
              <input id="documento" name="documento" type="text" className="form-control" placeholder="Digite su usuario" />
            </div>
            <div className="form-group">
              <label className="pb-2" htmlFor="contrasena"><b>Constrasena</b></label>
              <input id="contrasena" name="contrasena" type="password" className="form-control" placeholder="Digite su Contrase&ntilde;a" />
            </div>
            <div className="text-center">
              <br />
              <button name="enviar" id="enviar" className="btn w-100" style={{ color: 'white', backgroundColor: '#5393EB', borderColor: '#5393EB' }}>Ingresar</button>
            </div>
          </div>
        </div>
        <img className="pt-4" src="https://unidadfamiliamedellin.com.co/metodologia2servidor/resources/img/footer.png" alt="" />
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export {Login};