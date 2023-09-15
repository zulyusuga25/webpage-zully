import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Biografia from './Components/Biografia';
import Desarrollador from './Components/Desarrollador';
import Contacto from './Components/Contacto';
import Intereses from './Components/Intereses';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/Biografia" element={<Biografia />} />
        </Routes>
        <Routes>
          <Route path="/Desarrollador" element={<Desarrollador />} />
        </Routes>
        <Routes>
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Routes>
          <Route path="/Intereses" element={<Intereses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
