import React from 'react';
import { useHistory } from "react-router";
import Student from '../images/student1.png';
import Course1 from '../images/Curso1.png';
import Course2 from '../images/Curso2.png';
import Course3 from '../images/Curso3.png';
import '../style/StudentCourse.css';

function StudentCourse() {
  const history = useHistory("/studentCourse");

  return (
    <div className="studentConteiner">
      <div className="headerStudent">
        <h2>Meus Cursos</h2>
        <div className="student">
          <p>Olá Felipe Ribeiro!</p>
          <img src={Student} />
        </div>
      </div>
      <div className="studentCourses">
      <img src={Course1} onClick={() => history.push("/emotionalIntelligence")}/>
      <img src={Course2} />
      <img src={Course3} />
      </div>
    </div>
  )
}

export default StudentCourse;
