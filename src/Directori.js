import React from "react";
import "./App.css";

function Directori() {
  return (
    <>
      <body>
        <div className="contenedor">
          <header>
            <nav>
              <button className="sideBar" onclick="openNav()">
                ☰
              </button>
              <img
                alt="Audi car with a the logo of OldRally"
                src="img/OldRallyLogo.jpg"
              />
              <ul>
                <li>
                  <a href="index.js">Inicio</a>
                </li>
                <li>
                  <a href="blog.js">Blog</a>
                </li>
                <li>
                  <a href="directori.js">Grupos</a>
                </li>
                <li>
                  <a href="about.js">Nosotros</a>
                </li>
                <li>
                  <a href="contact.js">Contacto</a>
                </li>
              </ul>
              <button id="modo-toggle">🌙 / ☀️</button>
            </nav>
            <div className="overlay" id="myNav">
              <a
                className="closebtn"
                href="javascript:void(0)"
                onclick="closeNav()"
              >
                ×
              </a>
              <div className="overlay-content">
                <a href="index.js">Inicio</a>
                <a href="blog.js">Blog</a>
                <a href="about.js">Nosotros</a>
                <a href="contact.js">Contacto</a>
              </div>
            </div>
          </header>
          <section className="container my-5">
            <h2 className="mb-4">Grupos de Rally Clásicos</h2>
            <div className="accordion" id="accordionGrups">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button
                    aria-controls="collapse1"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapse1"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo 1: Coches de serie
                  </button>
                </h2>
                <div
                  aria-labelledby="heading1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapse1"
                >
                  <div className="accordion-body">
                    <p>
                      Vehículos prácticamente de producción con muy pocas
                      modificaciones. Pensados para mantener los costes bajos y
                      facilitar el acceso al rally a pilotos no profesionales.
                    </p>
                    <p>
                      <strong>Homologación:</strong> Mínimo 5000 unidades
                      producidas.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Iniciación y competición
                      amateur.
                    </p>
                    <p>
                      <strong>Características:</strong> Sin modificaciones en
                      motor ni suspensión. Solo elementos de seguridad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button
                    aria-controls="collapse2"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapse2"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo 2: Coches de turismo modificados
                  </button>
                </h2>
                <div
                  aria-labelledby="heading2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapse2"
                >
                  <div className="accordion-body">
                    <p>
                      Coches basados en modelos de serie pero con más libertad
                      para hacer modificaciones mecánicas. Muy utilizados
                      durante los años 70.
                    </p>
                    <p>
                      <strong>Homologación:</strong> Mínimo 1000 unidades.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Rallys europeos y
                      mundiales hasta inicios de los 80.
                    </p>
                    <p>
                      <strong>Características:</strong> Libre modificación de
                      suspensión, motor y frenos, pero manteniendo el chasis
                      original.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button
                    aria-controls="collapse3"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapse3"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo 3: Coches deportivos de serie
                  </button>
                </h2>
                <div
                  aria-labelledby="heading3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapse3"
                >
                  <div className="accordion-body">
                    <p>
                      Turismos deportivos homologados para competir con pocas
                      modificaciones. Vehículos como el Porsche 911 destacaron
                      en este grupo.
                    </p>
                    <p>
                      <strong>Homologación:</strong> 500 unidades como mínimo.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Rallys de montaña y
                      asfalto.
                    </p>
                    <p>
                      <strong>Características:</strong> Vehículos como el
                      Porsche 911, muy potentes pero con tracción trasera.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    aria-controls="collapse4"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapse4"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo 4: Coches deportivos modificados
                  </button>
                </h2>
                <div
                  aria-labelledby="heading4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapse4"
                >
                  <div className="accordion-body">
                    <p>
                      Categoría para coches deportivos de producción limitada,
                      pero con muchas opciones de modificación. Marcaron una
                      época antes de la introducción del Grupo B.
                    </p>
                    <p>
                      <strong>Homologación:</strong> 400 unidades.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Años 70 e inicios de los
                      80.
                    </p>
                    <p>
                      <strong>Características:</strong> Permitía grandes
                      modificaciones. Modelos míticos como el Lancia Stratos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingA">
                  <button
                    aria-controls="collapseA"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapseA"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo A: Sucesor del Grupo B
                  </button>
                </h2>
                <div
                  aria-labelledby="headingA"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapseA"
                >
                  <div className="accordion-body">
                    <p>
                      Introducido como una alternativa más segura al Grupo B.
                      Basado en coches de producción con ciertas restricciones.
                      Dominó el WRC durante los años 90.
                    </p>
                    <p>
                      <strong>Homologación:</strong> 2500 unidades.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Mundial de Rally después
                      de 1987 hasta 1997.
                    </p>
                    <p>
                      <strong>Características:</strong> Coches derivados de
                      serie con tracción total y restricciones estrictas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingB">
                  <button
                    aria-controls="collapseB"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapseB"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo B: Legendario y peligroso
                  </button>
                </h2>
                <div
                  aria-labelledby="headingB"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapseB"
                >
                  <div className="accordion-body">
                    <p>
                      Creado en 1982, era conocido por permitir coches
                      extremadamente potentes y ligeros. Sus bajos requisitos de
                      homologación llevaron a una era espectacular pero muy
                      peligrosa. Prohibido en 1986.
                    </p>
                    <p>
                      <strong>Homologación:</strong> Solo 200 unidades.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Mundial de Rally
                      (1982-1986).
                    </p>
                    <p>
                      <strong>Características:</strong> Hasta 600 CV, menos de
                      1000 kg, muy peligroso. Motores turbo sin límites
                      prácticos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingN">
                  <button
                    aria-controls="collapseN"
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#collapseN"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Grupo N: Coches casi de serie
                  </button>
                </h2>
                <div
                  aria-labelledby="headingN"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionGrups"
                  id="collapseN"
                >
                  <div className="accordion-body">
                    <p>
                      Categoría para coches con muy pocas modificaciones,
                      orientada a equipos amateurs y categorías inferiores. Muy
                      utilizada en rallys regionales.
                    </p>
                    <p>
                      <strong>Homologación:</strong> 2500 unidades.
                    </p>
                    <p>
                      <strong>Uso principal:</strong> Campeonatos nacionales y
                      promoción de pilotos jóvenes.
                    </p>
                    <p>
                      <strong>Características:</strong> Tracción integral
                      limitada, pocas modificaciones. Coches como el Mitsubishi
                      Lancer Evo y Subaru Impreza WRX base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <p>© 2025 OldRally - Pasión por el rally antiguo.</p>
          </footer>
          <script src="js/script.js"></script>
        </div>
      </body>
    </>
  );
}

export default Directori;
