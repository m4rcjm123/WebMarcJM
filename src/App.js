import React from "react";
import { Outlet, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Directori from "./Directori";

function App() {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/directori">Grupos</Link>
          </li>
          <li>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
