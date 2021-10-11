import React from "react";
import '../style/NavBar.css'
import {
  Navbar,
  Nav,
  NavDropdown,
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
                <Nav.Link className="navBarItems" href="#features">O que são Sft Skills</Nav.Link>
                <Nav.Link className="navBarItems" href="#pricing">Nosso plus</Nav.Link>
                <Nav.Link className="navBarItems" href="#deets">Quem Somos</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown className="navBarItems" title="Contatos" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Instagram
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    WhatsApp
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    E-mail
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey={2} href="#memes" id="login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
