import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="text" className="login-input" placeholder="Usuario" />
        <input type="password" className="login-input" placeholder="Contraseña" />
        <button className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
