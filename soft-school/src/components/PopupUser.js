// import React from "react";
// import { useHistory } from "react-router";
// import Msn from "../images/msn.png";
// import Porta from "../images/Porta.png";
// import "../style/PopupUser.css";
// import Student from "../images/student1.png";

// function PopupsUser(props) {
//   const history = useHistory("/soft-school");

//   return props.trigger ? (
//     <div className="popups-user">
//       <div className="user-inner">
//         <div className="student-popup">
//           <div className="infoStudent">
//             <h2>Olá Felipe Ribeiro!</h2>
//             <p>felipe.ribeiro@softschool.com.br</p>
//           </div>
//           <div>
//             <img src={Student} alt="" onClick={() => props.setTrigger(false)} />
//           </div>
//         </div>
//         <div className="mainUser">
//           <span>Meus Cursos</span>
//           <span>Alterar Senha</span>
//           <div>
//             <span>Mensagens</span>
//             <img src={Msn} alt="Sair" />
//           </div>
//           <button
//             id="buttonSair"
//             type="button"
//             onClick={() => history.push("/soft-school")}
//           >
//             <img src={Porta} alt="Sair" /> Sair
//           </button>
//         </div>
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

// export default PopupsUser;
