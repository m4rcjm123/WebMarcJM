import React from "react";
import "./Home.css";
import img1 from "./assets/OldRallyLogo.jpg";
import img2 from "./assets/montecarlo-1911.jpg";
import img3 from "./assets/grupo-b-banner.jpg";
import img4 from "./assets/alpine-a110-1973.jpg";
import img5 from "./assets/lancia-delta.jpg";
import img6 from "./assets/subaru-impreza.jpg";
import img7 from "./assets/audi-quattro.jpg";

function Blog() {
  function openNav() {
    document.getElementById("myNav").style.width = "25%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  const filterLinks = document.querySelectorAll(".blog-filters a");
  const cards = document.querySelectorAll("#blog-list .col");

  filterLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      filterLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      const filter = link.dataset.filter;
      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category.includes(filter)) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });

  return (
    <>
      <body>
        <header>
          <nav>
            <button className="sideBar" onClick={openNav}>
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
              onClick={closeNav}
            >
              ×
            </a>
            <div className="overlay-content">
              <a href="index.html">Inicio</a>
              <a href="directori.html">Grupos</a>
              <a href="about.html">Nosotros</a>
              <a href="contact.html">Contacto</a>
            </div>
          </div>
        </header>
        <section className="blog-hero">
          <h1>Últimas entradas</h1>
        </section>
        <main className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div className="blog-filters">
              <a className="active" data-filter="all" href="#">
                Todos
              </a>
              <a data-filter="historia" href="#">
                Historia
              </a>
              <a data-filter="coches" href="#">
                Coches
              </a>
              <a data-filter="pilotos" href="#">
                Pilotos
              </a>
              <a data-filter="eventos" href="#">
                Eventos
              </a>
              <a data-filter="tecnica" href="#">
                Técnica
              </a>
            </div>
            <form className="d-flex search-wrapper" role="search">
              <input
                aria-label="Buscar"
                className="form-control form-control-sm me-1"
                placeholder="Buscar..."
                type="search"
              />
              <button
                className="btn btn-sm btn-outline-secondary"
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4" id="blog-list">
            <div className="col" data-category="historia">
              <a
                className="text-decoration-none text-dark"
                href="cartas/detall-hist-montecarlo.html"
              >
                <div
                  className="card blog-card h-100"
                  itemscope=""
                  itemtype="https://schema.org/Article"
                >
                  <img
                    alt="Gran Premio de Montecarlo 1911"
                    className="card-img-top"
                    itemprop="image"
                    itemscope=""
                    itemtype="https://schema.org/ImageObject"
                    src={img2}
                  />
                  <div className="card-body">
                    <h5 className="card-title" itemprop="headline">
                      1911: el Gran Premio de Montecarlo y el nacimiento del
                      rally
                    </h5>
                    <p className="card-text" itemprop="description">
                      Un repaso a la primera gran prueba de regularidad que
                      sentó las bases del rally moderno.
                    </p>
                    <div className="tags mb-2">
                      <span>historia</span>
                      <span>eventos</span>
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <span>12 Mar 2025</span>
                      <span className="text-capitalize">Historia</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col" data-category="historia">
              <a
                className="text-decoration-none text-dark"
                href="cartas/detall-grupo-b.html"
              >
                <div
                  className="card blog-card h-100"
                  itemscope=""
                  itemtype="https://schema.org/Article"
                >
                  <img
                    alt="Grupo B Rally"
                    className="card-img-top"
                    itemprop="image"
                    itemscope=""
                    itemtype="https://schema.org/ImageObject"
                    src={img3}
                  />
                  <div className="card-body">
                    <h5 className="card-title" itemprop="headline">
                      Grupo B (1982‑1986): la era de la velocidad sin límites
                    </h5>
                    <p className="card-text" itemprop="description">
                      Exploramos los coches, los héroes y las tragedias que
                      marcaron la categoría más salvaje del rally.
                    </p>
                    <div className="tags mb-2">
                      <span>historia</span>
                      <span>coches</span>
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <span>08 Mar 2025</span>
                      <span className="text-capitalize">Historia</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col" data-category="historia">
              <a
                className="text-decoration-none text-dark"
                href="cartas/detall-wrc1973.html"
              >
                <div
                  className="card blog-card h-100"
                  itemscope=""
                  itemtype="https://schema.org/Article"
                >
                  <img
                    alt="Alpine A110 1973"
                    className="card-img-top"
                    itemprop="image"
                    itemscope=""
                    itemtype="https://schema.org/ImageObject"
                    src={img4}
                  />
                  <div className="card-body">
                    <h5 className="card-title" itemprop="headline">
                      1973: primer Mundial y la gesta del Alpine A110
                    </h5>
                    <p className="card-text" itemprop="description">
                      Cómo Renault‑Alpine se alzó con el título inaugural del
                      WRC y cambió la historia para siempre.
                    </p>
                    <div className="tags mb-2">
                      <span>historia</span>
                      <span>wrc</span>
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <span>01 Mar 2025</span>
                      <span className="text-capitalize">Historia</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col" data-category="coches">
              <a
                className="text-decoration-none text-dark"
                href="cartas/detall-coche-lancia-delta-integrale.html"
              >
                <div
                  className="card blog-card h-100"
                  itemscope=""
                  itemtype="https://schema.org/Article"
                >
                  <img
                    alt="Lancia Delta Integrale"
                    className="card-img-top"
                    itemprop="image"
                    itemscope=""
                    itemtype="https://schema.org/ImageObject"
                    src={img5}
                  />
                  <div className="card-body">
                    <h5 className="card-title" itemprop="headline">
                      Lancia Delta Integrale: leyenda del Grupo A
                    </h5>
                    <p className="card-text" itemprop="description">
                      Repasamos la historia y las innovaciones que convirtieron
                      al Delta en un icono del rally mundial.
                    </p>
                    <div className="tags mb-2">
                      <span>coches</span>
                      <span>historia</span>
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <span>10 Mar 2025</span>
                      <span className="text-capitalize">Coches</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col" data-category="pilotos">
              <a
                className="text-decoration-none text-dark"
                href="cartas/detall-piloto.html"
              >
                <div
                  className="card blog-card h-100"
                  itemscope=""
                  itemtype="https://schema.org/Article"
                >
                  <img
                    alt="Colin McRae Subaru"
                    className="card-img-top"
                    itemprop="image"
                    itemscope=""
                    itemtype="https://schema.org/ImageObject"
                    src={img6}
                  />
                  <div className="card-body">
                    <h5 className="card-title" itemprop="headline">
                      Colin McRae y el arte de llevar el Impreza al límite
                    </h5>
                    <p className="card-text" itemprop="description">
                      Un homenaje al carismático piloto escocés y sus hazañas a
                      bordo del Subaru Impreza.
                    </p>
                    <div className="tags mb-2">
                      <span>pilotos</span>
                      <span>leyendas</span>
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <span>05 Mar 2025</span>
                      <span className="text-capitalize">Pilotos</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col" data-category="eventos">
              <a
                className="text-decoration-none text-dark"
                href="cartas/detall-evento.html"
              >
                <div
                  className="card blog-card h-100"
                  itemscope=""
                  itemtype="https://schema.org/Article"
                >
                  <img
                    alt="Rally de Montecarlo 1984"
                    className="card-img-top"
                    itemprop="image"
                    itemscope=""
                    itemtype="https://schema.org/ImageObject"
                    src={img7}
                  />
                  <div className="card-body">
                    <h5 className="card-title" itemprop="headline">
                      Rally Montecarlo 1984: el dominio del Audi Quattro
                    </h5>
                    <p className="card-text" itemprop="description">
                      Cómo el Quattro cambió para siempre la tracción total en
                      competición.
                    </p>
                    <div className="tags mb-2">
                      <span>eventos</span>
                      <span>historia</span>
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <span>22 Feb 2025</span>
                      <span className="text-capitalize">Eventos</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </main>
        <footer className="text-center py-4 mt-5">
          <p>© 2025 OldRally - Pasión por el rally antiguo.</p>
        </footer>
      </body>
    </>
  );
}

export default Blog;
