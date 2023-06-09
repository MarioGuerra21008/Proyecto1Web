import React from 'react';
import './Communities.css';

function Communities() {
  return (
    <div className="Communities" data-testid="communities">
      <div className="communities-text">
        <h1>
          De unos pocos
          <br />
          fans a un montón
        </h1>
        <p>
          Establece cualquier comunidad con las
          <br />
          herramientas de moderación y el acceso
          <br />
          personalizado de miembros. Concédeles
          <br />
          poderes especiales, crea canales privados y
          <br />
          mucho más.
        </p>
      </div>
      <img
        src="/communities.svg"
        alt="comunidades"
        className="imgCommunities"
      />
    </div>
  );
}

export default Communities;
