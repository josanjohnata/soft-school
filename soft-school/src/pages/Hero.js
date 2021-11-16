import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Hero.css";
import Menu from "../components/NavBar";
import Details from "../pages/Details";
import WhatsApp from "../images/Whatsapp.png";
import imgVideo from "../images/PaginaInicial.png";

function Hero() {
  return (
    <>
      <header id="top">
        <Menu />
      </header>
      <img alt="" src={WhatsApp} className="whatsappIcon" />
      <section className="hero">
        <div className="container">
          <div>
            <h2>A ESCOLA QUE TE PREPARA PARA O MERCADO</h2>
            <p>
              Contratar é um drama para empresas e gestores. Encontrar um
              emprego bacana é o drama do trabalhador. Nossa missão é aproximar
              esses polos e fomentar um mercado de trabalho mais saudável.
              <br />
              <br />
              Capacitamos gestores e lideres que entendem a importância de
              motivar seus colaboradores a crescer junto com a empresa.
              Lapidando talentos para se tornar melhores como profissionais e
              como pessoas.
            </p>
          </div>
          <img alt="" className="imgVideo" src={imgVideo} />
        </div>
        <a href="#details" id="btnSaibaMais">
          Saiba mais!
        </a>
      </section>

      <Details />
    </>
  );
}

export default Hero;
