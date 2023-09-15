import React from 'react';
import './Intereses.css';

function Intereses() {
  return (
    <div className="intereses-container">
      <h1 className="intereses-title">Intereses</h1>
      <p>Entre los intereses que tengo en la vida podemos encontrar el interés por la lectura, conocer diferentes lugares de Colombia y compartir con mis sobrinos las fechas más importantes para ellos.</p>
      <div className="intereses-list">
        <div className="interes">
          <h2>La Lectura</h2>
          <p>
            Me apasiona la lectura por que de esta forma me distraigo de las responsabilidades diarias, donde procuro leer una vez por semana para no perder interés en el libro que me encuentre leyendo y en las responsabilidades diarias.
          </p>
        </div>
        <div className="interes">
          <h2>Viajar</h2>
          <p>
          Me gusta viajar por colombia por que tiene una cultura muy diversa y cada región que he visitado me ha parecido fascinante e interesante, la intención es conocer Colombia por completo o la mayor cantidad posible de esta misma.
          </p>
        </div>
        <div className="interes">
          <h2>Tiempo en Familia</h2>
          <p>
          Desde pequeña mi mamá y hermanos me enseñaron desde pequeña que el tiempo en familia es de las cosas más importantes que puedo tener, ya que serán momentos que no se repetirán y por tal motivo me gusta estar siempre presente en los momentos más importantes de cada uno de uno de ellos y de esta forma no sentirán que sus logros no son importantes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intereses;
