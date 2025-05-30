import React from "react";
import "./App.css"; // Asegúrate de mover estilos si es necesario
import oldRallyLogo from "./assets/OldRallyLogo.jpg"; // Ruta ajustada para Webpack

function Home() {
  const openNav = () => {
    // Implementación de openNav (puedes mejorarla con useState si es un sidebar real)
    alert("Sidebar abierto (función openNav no implementada completamente)");
  };

  return (
    <div>
      <main>
        {/* Aquí va el contenido de la página index.html que aún no convertimos */}
        <p>Contenido principal...</p>
      </main>
    </div>
  );
}

export default Home;
