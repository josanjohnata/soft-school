import React from "react";
import { useHistory } from "react-router";
import "../style/CoursePage3.css";
import IconUser from '../components/IconUser';
import CourseVideo from "../images/Player2.png";
import ArrowLeft from "../images/ArrowLeftA.png";
import ArrowRight from "../images/ArrowRigthA.png";
import Back from "../images/Back.png";

function CoursePage2() {
  const history = useHistory(
    "/coursePage3",
    "/soft-school",
    "/emotionalIntelligence"
  );
  return (
    <div>
      <IconUser />
      <div className="bodyCourse">
        <h4>Inteligência Emocional</h4>
        <p>Aula 3: O hábito mais importante</p>
      </div>
      <div className="containerCourse">
        <img src={CourseVideo} alt="" />
        <div className="progressDashboard">
          <h5>Conteúdo deste módulo:</h5>
          <label>
            <input type="radio" checked />
            <span>Aula 1: Introdução a I.E.</span>
          </label>
          <label>
            <input type="radio" checked />
            <span>Aula 2: Moldando a realidade</span>
          </label>
          <label>
            <input type="radio" />
            <span>Aula 3: O hábito mais importante</span>
          </label>
          <label className="disabled">
            <input type="radio" disabled={true} />
            <span>Aula 4: Satisfação com a vida</span>
          </label>
          <label className="disabled">
            <input type="radio" disabled={true} />
            <span>Aula 5: Preparando-se para o futuro com I.E.</span>
          </label>
          <label className="disabled">
            <input type="radio" disabled={true} />
            <span>Aula 6: Mudança comportamental</span>
          </label>
        </div>
      </div>
      <div className="footerCourser">
        <label>
          <img
            alt=""
            src={ArrowLeft}
            className="footerCourserBtn"
            onClick={() => history.push("/CoursePage2")}
          />
          <span className="Anterior">Anterior</span>
        </label>
        <div>
          <label>
            <span className="Próxima">Próxima</span>
            <img
              alt=""
              src={ArrowRight}
              className="footerCourserBtn"
            />
          </label>
        </div>
        <div>
          <span>Voltar</span>
          <img
            alt=""
            src={Back}
            className="footerCourserBtn"
            onClick={() => history.push("/soft-school")}
          />
        </div>
      </div>
    </div>
  );
}

export default CoursePage2;
