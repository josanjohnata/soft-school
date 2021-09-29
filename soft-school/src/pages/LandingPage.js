import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import smart from "../images/smart.png";
import creativity from "../images/creativity.jpg";
import criticalThink from "../images/critical-think.png";
import studen from "../images/studen.png";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={studen} />
              </div>
              <div className="col-md-6">
                <div className="text">
                <h1>Logo + SoftSchool</h1>
                  <h2>
                    APRENDA O PASSO A PASSO TUDO SOBRE SOFT SKILLS blá blá blá
                    blá...
                  </h2>
                  <a href=".saibaMais">Saiba mais!</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <section id="missao">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="miss-video"></div>
              </div>
              <div className="col-md-6">
                <h2>Nossa missão</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
            </div>
            <div className="row valores">
              <div className="col-md-4 col-sm-12">
                <div className="col-md-4">
                  <img src={creativity} />
                </div>
                <div className="col-md-9">
                  <h3>Criatividade</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="col-md-5">
                  <img src={smart} />
                </div>
                <div className="col-md-9">
                  <h3>Inteligência Emocional</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="col-md-5">
                  <img src={criticalThink} />
                </div>
                <div className="col-md-9">
                  <h3>Pensamento Crítico</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video">
		<div className="container">
			<iframe width="100%" height="500px" src="https://www.youtube.com/watch?v=4lL0v7jsw6s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
		</div>
	</section>

  <section id="ajuda">
		<div className="container">
			<div className="row">
				<h2>Depoimentos</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.</p>
			</div>
			<div className="row">
				<div className="col-md-5 col-md-offset-1">
					<div className="box orange">
						<img src="assets/img/doacao1.png" alt="Print de um comentário" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
					<div className="box blue">
						<img src="assets/img/doacao3.png" alt="Print de um comentário" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
					<div className="box green">
						<img src="assets/img/doacao5.png" alt="Print de um comentário"/>
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
					<div className="box yellow">
						<img src="assets/img/doacao7.png" alt="Print de um comentário" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
				</div>
				<div className="col-md-5">
					<div className="box green box-first">
						<img src="assets/img/doacao2.png" alt="Print de um comentários" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
					<div className="box yellow">
						<img src="assets/img/doacao4.png" alt="Print de um comentário" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
					<div className="box orange">
						<img src="assets/img/doacao6.png" alt="Print de um comentário" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
					</div>
					<div className="box blue">
						<img src="assets/img/doacao8.png" alt="Print de um comentário" />
						<h3>Fulano de Tal</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s</p>
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
