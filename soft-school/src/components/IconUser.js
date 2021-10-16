import React from "react";
import Student from "../images/student1.png";
// import PopupUser from './PopupUser';

function IconUser() {
  // const [profileUser, setProfileUser] = useState(false);

  return (
    <div>
      <div className="headerStudent">
        <h2>Meus Cursos</h2>
        <div className="student">
          <p>Olá Felipe Ribeiro!</p>
          <img
            src={Student}
            alt=""
            // onClick={() => setProfileUser(true)}
          />
        </div>
      </div>
      {/* <PopupUser trigger={profileUser} setTrigger={setProfileUser} />  */}
    </div>
  );
}

export default IconUser;
