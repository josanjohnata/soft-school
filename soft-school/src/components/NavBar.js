import React from "react";
import '../style/NavBar.css'
import {
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../images/logo.jpg'

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="containerNavBar" collapseOnSelect>
      <img src={Logo} className="logo" />
        <Container fluid className="text-justify">        
          <Col md="auto">          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-navbar" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="navBarItems" href="#features">O que são Soft Skills</Nav.Link>
                <Nav.Link className="navBarItems" href="#pricing">Nosso plus</Nav.Link>
                <Nav.Link className="navBarItems" href="#deets">Quem Somos</Nav.Link>
                <Nav.Link className="navBarItems" href="#deets">Contato</Nav.Link>
              </Nav>                  
                <Nav.Link eventKey={2} href="#memes" id="login">
                  Login
                </Nav.Link>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
