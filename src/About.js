import React from "react";
import "./App.css";
import img1 from "./assets/marc.jpg";

function About() {
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
                <a href="index.html">Inicio</a>
                <a href="blog.html">Blog</a>
                <a href="directori.html">Grupos</a>
                <a href="contact.html">Contacto</a>
              </div>
            </div>
          </header>
          <section className="sobre-nosotros">
            <h2>Sobre nosotros</h2>
            <div className="profile-cards">
              <div className="profile-card">
                <img
                  alt="Foto de Marc Jiménez"
                  className="profile-img"
                  src={img1}
                />
                <h3>Marc Jiménez</h3>
                <p className="title">Fundador</p>
                <p>
                  Enamorado del diseño web y los coches de los 80. Se encarga
                  del contenido y desarrollo de OldRally.
                </p>
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

export default About;
