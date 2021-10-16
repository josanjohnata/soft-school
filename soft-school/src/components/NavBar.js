import React, { useState } from "react";
import "../style/NavBar.css";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/logo.jpg";
import PopupLogin from "./PopupsLogin";

function NavBar() {
  const [buttonLogin, setButtonLogin] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="containerNavBar" collapseOnSelect>
        <img alt="" src={Logo} className="logo" />
        <Container fluid className="text-justify">
          <Col md="auto">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="toggle-navbar"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="navBarItems" href="#details">
                  O que são Soft Skills
                </Nav.Link>
                <Nav.Link className="navBarItems" href="#BigPac">
                  Nosso plus
                </Nav.Link>
                <Nav.Link className="navBarItems" href="#footert">
                  Quem Somos
                </Nav.Link>
                <Nav.Link className="navBarItems" href="#contact">
                  Contato
                </Nav.Link>
              </Nav>
              <Nav.Link onClick={() => setButtonLogin(true)} id="login">
                Login
              </Nav.Link>
              <PopupLogin trigger={buttonLogin} setTrigger={setButtonLogin}>                
              </PopupLogin>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
