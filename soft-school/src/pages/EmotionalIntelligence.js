import React from "react";
import "../style/EmotionalIntelligence.css";
import Student from "../images/student1.png";
import CourseVideo from "../images/Player1.png";
import ArrowLeft from "../images/ArrowLeft.png";
import ArrowRight from "../images/ArrowRigth.png";
import Back from "../images/Back.png";

function EmotionalIntelligence() {
  return (
    <div>
      <div className="headerStudent">
        <h2>Meus Cursos</h2>
        <div className="student">
          <p>Olá Felipe Ribeiro!</p>
          <img src={Student} />
        </div>
      </div>
      <div className="bodyCourse">
        <h4>Inteligência Emocional</h4>
        <p>Aula 1: Introdução à Inteligencia emocional</p>
      </div>
      <div className="containerCourse">
        <img src={CourseVideo} />
        <div className="progressDashboard">
          <h5>Conteúdo deste módulo:</h5>
          <label>
            <input type="radio" />
            <span>Aula 1: Introdução a I.E.</span>
          </label>
          <label>
            <input type="radio" />
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
          <img src={ArrowLeft} />
            </label>
          <div>
            <label>
            <span>Próxima</span>
          <img src={ArrowRight}  />
            </label>
            
          </div>
          <div>
            <span>Voltar</span>
          <img src={Back}  />
          </div>
      </div>
    </div>
  );
}

export default EmotionalIntelligence;
