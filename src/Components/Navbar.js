import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Inicio">Inicio</Link></li>
        <li><Link to="/Biografia">Biografia</Link></li>
        <li><Link to="/Desarrollador">Desarrollador</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li><Link to="/Login">Iniciar Sesion</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;





