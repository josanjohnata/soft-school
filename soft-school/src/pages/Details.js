import React from "react";
import "../style/Details.css";
import BigPac from "./BigPac";
import Dash1 from "../images/Cards_New_dashboard_1.jpg";
import Dash2 from "../images/Cards_New_dashboard_2.jpg";
import Dash3 from "../images/Cards_New_dashboard_3.jpg";
import Dash4 from "../images/Cards_New_dashboard_4.jpg";

export default function Details() {
  return (
    <>
      <section id="details">
        <div className="containerDetails">
          <div className="rowDetails">
            <div className="textDetails">
              <h2 id="details">
                "HARD SKILLS CONTRATAM, SOFT SKILLS DEMITEM"
              </h2>
              <p>
                O lema é perfeito. Mas a prática não é fácil. <br />O mercado
                tem mais ferramentas e capacidade de avaliar as verdadeiras
                habilidades técnicas de um profissional. <br />Nosso trabalho é
                interceder por todos e ajudar empresas e colaboradores a se
                encontrarem numa mesma cultura comportamental.
              </p>
            </div>
            <div className="dashboard">
              <img alt="" src={Dash1} className="dashboard1" />
              <img alt="" src={Dash2} className="dashboard1" />
              <img alt="" src={Dash3} className="dashboard1" />
              <img alt="" src={Dash4} className="dashboard1" />
            </div>
          </div>
        </div>
      </section>
      <BigPac />
    </>
  );
}
