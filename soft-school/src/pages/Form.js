import React from "react";
import "../style/Form.css";
// import ImgContact from '../images/Contato.png';

export default function Form() {
  return (
    <div className="formContainer">
      <h2>EVOLUA AO NOSSO LADO!</h2>
      <p>Preencha o formulário e trilhe um caminho de sucesso com a gente.</p>
      <form className="formMessage">
        <label for="name">Nome: </label>
        <input name="name" type="text" placeholder="Digite seu nome" />
        <label for="empresa">Empresa: </label>
        <input name="empresa" type="text" placeholder="Digite o Nome da Empresa" />
        <label for="email">E-mail: </label>
        <input name="email" type="email" placeholder="Digite seu E-mail" />
        <label for="telefone">Telefone: </label>
        <input name="telefone" type="telefone" placeholder="Digite seu Telefone" />
        <button id="buttonEnviar" type="button">
          Enviar
        </button>
      </form>
      {/* <ImgContact /> */}
    </div>
  );
}
