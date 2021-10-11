import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/hero.css";
import Menu from "../components/NavBar";

function Hero() {
  return (
    <div>
      <Menu />
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
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
                <a href=".saibaMais">Saiba mais!</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-video"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
