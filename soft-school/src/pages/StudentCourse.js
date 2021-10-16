import React from 'react';
import { useHistory } from "react-router";
import Course1 from '../images/Curso1.png';
import Course2 from '../images/Curso2.png';
import Course3 from '../images/Curso3.png';
import '../style/StudentCourse.css';
import IconUser from '../components/IconUser';

function StudentCourse() {
  const history = useHistory("/studentCourse");

  return (
    <div className="studentConteiner">
      <IconUser />
      <div className="studentCourses">
      <img alt="" src={Course1} onClick={() => history.push("/emotionalIntelligence")}/>
      <img alt="" src={Course2} />
      <img alt="" src={Course3} />
      </div>
    </div>
  )
}

export default StudentCourse;
