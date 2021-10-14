import React from "react";
import "../style/BigPac.css";
import Diferencial1 from "../images/Cards_Diferenciais_1.png";
import Diferencial2 from "../images/Cards_Diferenciais_2.png";
import Diferencial3 from "../images/Cards_Diferenciais_3.png";
import Diferencial4 from "../images/Cards_Diferenciais_4.png";

export default function BicPac() {
  return (
    <>
      <div>
        <section className="BigPac">
          <div className="container">
            <div>
              <div className="rowBigPac">
                <h2>BIG PAC!</h2>
                <p>
                  Nosso nº 1! Um modelo de treinamento com as soft skills mais
                  caras do mercado. No final de cada módulo, mentores preparados
                  para transformar a cultura de uma empresa de ponta a ponta:
                </p>
                <ol>
                  <li>líderes mais decisivos e empáticos;</li>
                  <li>funcionários mais colaborativos e proativos;</li>
                  <li>um modelo de negócios mais harmonioso e sustentável.</li>
                </ol>
              </div>
              <div className="row">
                <div>
                  <img src={Diferencial1} />
                  <img src={Diferencial2} />
                  <img src={Diferencial3} />
                  <img src={Diferencial4} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
