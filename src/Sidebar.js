import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <ul>
        <li>
          <Link to="/" onClick={onClose}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={onClose}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/directori" onClick={onClose}>
            Grupos
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
