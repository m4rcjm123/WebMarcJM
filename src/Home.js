import React from 'react';
import './App.css'; // Asegúrate de mover estilos si es necesario
import oldRallyLogo from './assets/OldRallyLogo.jpg'; // Ruta ajustada para Webpack
import './Home.css'; // Nuevo archivo si separamos estilos específicos

function Home() {
  const openNav = () => {
    // Implementación de openNav (puedes mejorarla con useState si es un sidebar real)
    alert("Sidebar abierto (función openNav no implementada completamente)");
  };

  return (
    <div>
      <header>
        <nav>
          <button className="sideBar" onClick={openNav}>☰</button>
          <img src={oldRallyLogo} alt="Audi car with the logo of OldRally" />

          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/directori">Grupos</a></li>
            <li><a href="/about">Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Aquí va el contenido de la página index.html que aún no convertimos */}
        <p>Contenido principal...</p>
      </main>
    </div>
  );
}

export default Home;
