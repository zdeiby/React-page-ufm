import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nava = () => {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);

  const showSubMenuHandler1 = () => {
    setShowSubMenu1(true);
  };

  const hideSubMenuHandler1 = () => {
    setShowSubMenu1(false);
  };

  const showSubMenuHandler2 = () => {
    setShowSubMenu2(true);
  };

  const hideSubMenuHandler2 = () => {
    setShowSubMenu2(false);
  };

  return (
    <>
      <div>
        <Navbar bg="light" expand="md" fixed="top" className="nav">
          <Navbar.Brand href="/">
            <img
              src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2022/03/Open-Graph-.png"
              alt=""
              width="150"
              height="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-center navegacion">
              <Nav.Link href="/" className="">
                Inicio
              </Nav.Link>
              <NavDropdown
                title="¿Quienes somos?"
                id="collasible-nav-dropdown"
                show={showSubMenu1}
                onMouseEnter={showSubMenuHandler1}
                onMouseLeave={hideSubMenuHandler1}
              >
                <NavDropdown.Item href="/contactenos">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contactenos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavDropdown.Item>
                <NavDropdown.Item href="/ufm">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unidad Familia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/noticias" className="">
               Noticias
              </Nav.Link>
              <Nav.Link href="/multimedia" className="">
                Multimedia
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <div className="boton">
             <Link to='/login'> <Button variant="primary" className="custom-button">
                Login UFM
              </Button></Link>
            </div>
          </Nav>
        </Navbar>

        <div className="header-top">
          Unidad Familia Medellin
        </div>

        <div className="content-wrapper">
          {/* Resto del código */}
        </div>
      </div>

      <div className="image-container">
        <img src="https://www.unidadfamiliamedellin.com.co/unidadfamiliamedellin/resources/img/head.png" className="image" alt="" />
      </div>
      <br />
    </>
  );
};

export { Nava };
