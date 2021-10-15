import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Hero.css";
import Menu from "../components/NavBar";
import Details from "../pages/Details";
// import { FaWhatsapp } from "react-icons/fa";
import WhatApp from '../images/Whatsapp.png';
import imgVideo from "../images/PaginaInicial.png"

function Hero() {
  return (
    <>
    <div>
      <Menu />
      <div className="hero">
        <div className="container">
          <div className="rowHero">
            <div className="col-md-6">
              <div className="textHero">
                <h1>A ESCOLA QUE TE PREPARA PARA O MERCADO</h1>
                <p>
                  Contratar é um drama para empresas e gestores. Encontrar um
                  emprego bacana é o drama do trabalhador. Nossa missão é
                  aproximar esses polos e fomentar um mercado de trabalho mais
                  saudável.
                  <br />
                  Capacitamos gestores e lideres que entendem a importância de
                  motivar seus colaboradores a crescer junto com a empresa.
                  Lapidando talentos para se tornar melhores como profissionais
                  e como pessoas.
                </p>
                <button href=".saibaMais" clasName="BtnSaibaMais">Saiba mais!</button>
              </div>
            </div>
            <div className="imgVideoContainer">
              <img className="imgVideo" src={imgVideo} />
              <img src={WhatApp} className="whatsappIcon" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Details />
    </>
  );
}

export default Hero;
