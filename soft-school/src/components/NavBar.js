import React, { useState } from "react";
import "../style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/logo.jpg";
import PopupLogin from "./PopupsLogin";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <button className="btn btn-primary" onClick={toggle}>
        Login
      </button>
      {isOpen && <PopupLogin />}
    </div>
  );
}

function NavBar() {
  const [buttonLogin, setButtonLogin] = useState(false);
  
  return (
    <>
      <div className="container">
        <img alt="" src={Logo} className="logo" />
        <div className="menu-section">
          <div className="menu-toggle" onClick={() => Toggle }>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#details">O que são Soft Skills</a>
              </li>
              <li>
                <a href="#BigPac">Nosso plus</a>
              </li>
              <li>
                <a href="#footert">Quem Somos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <a onClick={() => setButtonLogin(true)} id="login" href="#login">
                  Login
                </a>
              </li>
            </ul>
            <PopupLogin
              trigger={buttonLogin}
              setTrigger={setButtonLogin}
            ></PopupLogin>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
