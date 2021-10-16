import React from "react";
import "../style/Footer.css";
import imgEmail from "../images/Vector.png";
import imgFace from "../images/Facebook.png";
import imgInst from "../images/Instagram.png";
import imgLinkedIn from "../images/LinkedIn.png";
import Top from "../images/top.png";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <h2 id="footert">“quero mudar a minha empresa JÁ!”</h2>
          <h5>
            Mande uma mensagem para a Soft School e transforme a cultura da sua
            empresa de um jeito soft.
          </h5>
          <div className="containerEmail">
            <img alt="" src={imgEmail} />
            <p className="email">contato@softschool.com.br</p>
          </div>
        </div>
        <div className="containerContact">
          <div className="enderenco">
            <p>Avenida Paulista, 2028 - 12o Andar</p>
            <p>Cerqueira César</p>
            <p>São Paulo - SP</p>
            <p>CEP 12345-678</p>
          </div>
          <div className="icons">
            <img alt="" src={imgFace} />
            <img alt="" src={imgInst} />
            <img alt="" src={imgLinkedIn} />
          </div>
        </div>
      </div>
      <Nav.Link id="go-top" href="#top">
        <span className="top" title="Back to Top" >
          <img alt="" src={Top} href="#top" />
        </span>
      </Nav.Link>
    </div>
  );
}
