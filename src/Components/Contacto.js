import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contacto</h1>
      <div className="contacto-info">
        <p>Telefono: 312 7275106</p>
        <div className="redes-sociales">
          <a href="https://www.facebook.com/profile.php?id=100009549200601" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
