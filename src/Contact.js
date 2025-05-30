import React from "react";
import "./Home.css";
import img1 from "./assets/OldRallyLogo.jpg";

function Contact() {
  return (
    <>
      <body>
        <div className="contenedor">
          <header>
            <nav>
              <button className="sideBar" onclick="openNav()">
                ☰
              </button>
              <img alt="Audi car with a the logo of OldRally" src={img1} />
              <ul>
                <li>
                  <a href="index.html">Inicio</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="directori.html">Grupos</a>
                </li>
                <li>
                  <a href="about.html">Nosotros</a>
                </li>
                <li>
                  <a href="contact.html">Contacto</a>
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
                <a href="about.html">Nosotros</a>
              </div>
            </div>
          </header>
          <section className="contenido fade-in">
            <h2>Contacto</h2>
            <form
              className="formulario"
              itemscope="True"
              itemtype="https://schema.org/ContactPage"
            >
              <label>Nombre:</label>
              <input placeholder="Tu nombre" type="text" />
              <label>Email:</label>
              <input placeholder="tu@email.com" type="email" />
              <label>Mensaje:</label>
              <textarea placeholder="Escríbenos tu mensaje..."></textarea>
              <button type="submit">Enviar</button>
            </form>
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

export default Contact;
