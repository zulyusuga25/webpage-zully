import React from 'react';
import './Inicio.css';
import Slider from './Slider';

function Inicio() {
  return (
    <><div>
          <Slider />
      </div><div className="inicio-container">
              <h1 className="inicio-title">Bienvenido a mi portafolio</h1>
              <div className="inicio-content">
                  <p>Hola, soy Zuly Yuneidy Usuga Espinosa, espero que te pueda agradar el diseño de la pagina, ojala algun dia colaboremos juntos</p>
              </div>
          </div></>
  );
}

export default Inicio;
