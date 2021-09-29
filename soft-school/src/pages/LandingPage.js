import React, { Component } from "react";
import "../style/landingPage.css";
import imageVideo from '../images/soft-skills-carreira-e-sucesso.jpg'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h1>Logo + SoftSchool</h1>
          <div className="text">
            <h2>
              APRENDA O PASSO A PASSO TUDO SOBRE SOFT SKILLS BLÁ BLÁ BLÁ BLÁ...
              <br />
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip
            </h2>
          </div>
          <a href=".saibaMais">Saiba mais!</a>
        </div>

        <section id="missao">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="miss-video"></div>
				</div>
				<div className="col-md-6">
					<h2>Nossa missão</h2>
					<p>Ser um recomeço na vida das crianças que estão conosco, por meio de um acolhimento pautado no amor e respeito, mesmo sendo uma etapa passageira em suas vidas.</p>
				</div>
			</div>
			<div className="row valores">
				<div className="col-md-4 col-sm-12">
					<div className="col-md-4">
						{/* <img src="assets/img/valor1.png" alt="icone-ursinho"> */}
					</div>
					<div className="col-md-8">
						<h3>Acolhimento</h3>
						<p>Com muito carinho, receber e proteger as crianças para permitir que tenham um convívio familiar saudável e harmonioso.</p>
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="col-md-4">
						<img src={ imageVideo }/>
					</div>
					<div className="col-md-8">
						<h3>Amor</h3>
						<p>Permitir que as crianças conheçam e vivam em uma realidade pautada em princípios e valores cristãos, baseados no amor.</p>
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="col-md-4">
						{/* <img src="assets/img/valor3.png" alt="icone-garfo-faca"> */}
					</div>
					<div className="col-md-8">
						<h3>Respeito</h3>
						<p>Ambiente propício para estimular o desenvolvimento saudável das crianças, tanto fisicamente, quanto psicologicamente.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
      </div>
    );
  }
}

export default LandingPage;
