import React, { useState } from "react";
import { useHistory } from "react-router";
import "../style/PopupLogin.css";
import ClosePopup from "../images/close.png";

function PopupsLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(true);
  const history = useHistory("/studentCourse");

  const inputHandle = ({ target }) => {
    const { name, value } = target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const validLoginInputs = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;
    const testEmail = emailRegex.test(email);
    const passLength = 6;
    if (testEmail && password.length > passLength) {
      setInvalidLogin(false);
    } else {
      setInvalidLogin(true);
    }
  };

  return props.trigger ? (
    <div className="popups-login">
      <div className="popups-inner">
        <span className="close-btn" onClick={() => props.setTrigger(false)}>
          <img src={ClosePopup} />
        </span>
        <h2>Acessar meus cursos</h2>
        <form className="mainLogin">
          <label>Login</label>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => inputHandle(e)}
            onKeyUp={validLoginInputs}
          />
          <label>Senha</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => inputHandle(e)}
            onKeyUp={validLoginInputs}
          />
          <button
            id="buttonLogin"
            type="button"
            disabled={invalidLogin}
            onClick={() => history.push("/studentCourse")}
          >
            LOGIN
          </button>
        </form>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupsLogin;
