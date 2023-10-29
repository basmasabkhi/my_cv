import React from "react";
import "./App.css";
import image from "./20190913_224259-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { usePDF } from "react-to-pdf";
import "./App.css";

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: "page.pdf",
    options: {
      margin: 50, // Réglez les marges en pixels
    },
  });
  return (
    <div id="cv" ref={targetRef}>
      {/* <div className="cv">
        <div>
          <h1>Sabkhi Basma</h1>
          <h3>Ingénieur microélectronique- Full Stack MERN</h3>
        </div>
        <div className="image">
          <img
            src={image}
            alt="gfg-logo"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div> */}

      <div className="full">
        <div className="left">
          <div >
          <div className="image">
          <img
            src={image}
            alt="gfg-logo"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
            <div>
<h2 className="Skills">COMPÉTENCES</h2>
          <h5>language</h5>
              <p>langages C et C+, Java, Matlab, Mikroc, MSDOS, Java, C++</p>
            </div>

            <div>
              <h5>Logiciels</h5>
              <p>Isis, Cadence, Step7, Model Sim, Packet Trace</p>
            </div>

            <div>
              <h5>Frontend</h5>

              <p>HTML5, CSS,JSX, JavaScript(ES5,ES6), React, Redux,Boostrap</p>
            </div>

            <div>
              <h5>Backtend</h5>
              <p> Express.js,Node.js, MongoDB</p>
            </div>
          </div>

          <div className="line-above-cv"></div>

          <h2 className="Skills">Langues</h2>

          <ul>
            <div className="language">
              <li>Arabe</li>
              <div class="progress-bar">
                <div class="progress" style={{ width: "80%" }}></div>
              </div>{" "}
              <p>80%</p>
            </div>
            <div className="language">
              <li>France</li>
              <div class="progress-bar">
                <div class="progress" style={{ width: "80%" }}></div>
              </div>
              <p>80%</p>
            </div>
            <div className="language">
              <li>Anglai</li>
              <div class="progress-bar">
                <div class="progress" style={{ width: "50%" }}></div>
              </div>{" "}
              <p>50%</p>
            </div>
          </ul>
          <br />
          <div className="line-above-cv"></div>

          <div className="Hobbies">
            <h2 className="Skills">Centres d'intérêt</h2>
            <p>Voyage Lecture, Navigation sur internet, Cinéma.</p>
          </div>
          <div className="line-above-cv"></div>
          <div className="Contact">
            <h2 className="Skills">Contact</h2>
            <div className="FontAwesomeIcon">
              <FontAwesomeIcon icon={faEnvelope} />
              <p> sabkhi.basma89@gmail.com</p>{" "}
            </div>
            <div className="FontAwesomeIcon">
              <FontAwesomeIcon icon={faPhone} /> <p>+21623212641</p>
            </div>
            <div className="FontAwesomeIcon">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#000" }} />
              <p> https://github.com/basmasabkhi</p>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="TITLE">
          <h4><span>BASMA</span>  SABKHI</h4>
          <h3>Ingénieur microélectronique- Full Stack MERN</h3>
        </div>

          <div className="Summary">
            <p>
              Je suis un développeur JavaScript Full Stack en formation,
              passionnée par la création d'applications Web innovantes. Fort de
              ma solide formation en développement front-end et back-end, j'ai
              acquis des compétences essentielles en concevant et en développant
              divers projets au cours de ma formation. Mon engagement envers
              l'apprentissage continu et mon désir de relever de nouveaux défis
              font de moi une candidate déterminée à exceller dans le domaine du
              développement Web.
            </p>
          </div>

          <div className="Experience">
        
          <div className="style-experience">
  <h2 >Expériences professionnelles</h2>
  <hr/>
</div>



            <h3>Juil 2022 – Juin 2023</h3>
            <p>faire des cours de soutien scolaire</p>

            <h3>Oct 2021 – juin 2022</h3>
            <p>Animatrice au jardin d'enfant Palais des anges</p>

            <h3>September 2019 – septembre 2021</h3>
            <p>Maitresse - École primaire privée Jbara</p>

            <h3>Janvier 2018 – août 2019</h3>
            <p>Administration - Association Personnes Âgées Mahdia</p>

            <h3>Septembre 2016 – mai 2017</h3>
            <p>Garderie scolaire</p>

            <h3>Stage de Projet de Fin d’Étude (20 semaines)</h3>
            <p>
              Institut Supérieur d'Informatique et Mathématiques de Monastir
            </p>
            <p>
              Sujet : « Tatouage d’images médicales cryptées : Implémentation
              sous MATLAB et validation sur carte Arduino MEGA 2560 »
            </p>
            <h3>Juin - juillet 2015</h3>
            <p>Stage technicien (8 semaines)</p>
            <p>Société Manufacture Electrotechnique de Sousse (METS)</p>
            <p>Sujet : « Étude d’un système pick by light »</p>

            <h3>Janvier - mai 2013</h3>
            <p>Stage de Projet de Fin d’Étude (20 semaines)</p>
            <p>
              Centre de Formation Professionnelle de Pèche situé à Mahdia (CFPP)
            </p>
            <p>
              Sujet : « Étude, conception et réalisation d’un système de suivi
              par GPS »
            </p>

            <h3>Juillet 2012</h3>
            <p>Stage ouvrier (4 semaines)</p>
            <p>
              Société frigorifique et brasserie de Tunis situé à Mahdia, Tunisie
            </p>
          </div>
          <div className="Education">
            <div className="style-experience">
            <h2>Education</h2>
            <hr/>
            </div>
         
            <h3>juil 2023-nov 2023</h3>
            <p>
              Formation en Développement Full Stack MERN.
              <br />
              Certification en Développement Full Stack JavaScript MERN.
              <br />
              GoMyCode,Tunisie
            </p>
            <br />
            <h3>2013-2016</h3>
            <p>
              Diplôme d'Ingénieur en sciences appliquées et de la technologie
              dans l'électronique spécialité micro-électronique à l’Institut
              Supérieur d'Informatique et Mathématiques de Monastir, Tunisie.
            </p>

            <h3>2010-2013</h3>
            <p>
              Doubles diplômes en licence professionnelle automatique,
              informatique et industrielle spécialité réseaux et instrumentation
              intelligente pour les systèmes automatisés à l’Institut Supérieur
              des Sciences Appliquées et de Technologie de Mahdia, Tunisie et à
              l’Université Jean Monnet - IUT de Saint-Étienne, France.
            </p>

            <h3>2009-2010</h3>
            <p>
              Baccalauréat spécialité mathématique, Lycée Ibn Sina, Mahdia,
              Tunisie.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => toPDF()}
        style={{
          backgroundColor: "#007BFF", // Couleur de fond du bouton
          color: "white", // Couleur du texte du bouton
          padding: "10px 20px", // Remplissage (padding) du bouton
          border: "none", // Supprimer la bordure
          borderRadius: "5px", // Coins arrondis
          cursor: "pointer", // Curseur en forme de main (style de pointeur)
          display: "block", // Affiche le bouton en tant que bloc
          margin: "0 auto",
        }}
      >
        Download CV
      </button>
    </div>
  );
}

export default App;
