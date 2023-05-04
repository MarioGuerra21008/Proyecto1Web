import React from 'react';
import './Members.css';

function Members() {
  return (
    <div className="Members">
      <div className="members-text">
        <h1>
          Crea un lugar
          <br />
          solo para
          <br />
          miembros en el
          <br />
          que encajes
        </h1>
        <p>
          Los servidores de Discord se organizan en
          <br />
          canales ordenados por temas donde puedes
          <br />
          colaborar, compartir o simplemente hablar
          <br />
          de tu día sin monopolizar un chat de grupo.
        </p>
      </div>
      <img
        src="/members.svg"
        alt="miembros"
        className="imgMembers"
      />
    </div>
  );
}

export default Members;
