import React, { useState } from "react";
import "../style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/logo.jpg";
import PopupLogin from "./PopupsLogin";

function NavBar() {
  const [buttonLogin, setButtonLogin] = useState(false);

  // let show = true;

  // const menuSection = document.querySelector(".menu-section");
  // const menuToggle = menuSection.querySelector(".menu-toggle");

  // menuToggle.addEventListener("click", () => {
  //   document.body.style.overflow = show ? "hidden" : "initial";

  //   menuSection.classList.toggle("on", show);
  //   show = !show;
  // });

  return (
    <>
      <div class="container">
        <img alt="" src={Logo} className="logo" />

        <div class="menu-section">
          <div class="menu-toggle">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
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
                <a onClick={() => setButtonLogin(true)} id="login">
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
