import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <div className="row-Button">
        <button className="discord-button" type="button">
          <img width="120px" height="25px" src="/discordbut.png" alt="Discord" />
        </button>
        <button className="text-discord-button" type="button">Download</button>
        <button className="text-discord-button" type="button">Nitro</button>
        <button className="text-discord-button" type="button">Discover</button>
        <button className="text-discord-button" type="button">Safety</button>
        <button className="text-discord-button" type="button">Support</button>
        <button className="text-discord-button" type="button">Blog</button>
        <button className="text-discord-button" type="button">Careers</button>
        <button className="login-discord-button" type="button">Login</button>
      </div>
      <div className="info-text">
        <h1>IMAGINA UN LUGAR...</h1>
        <p>
          ...en el que puedas formar parte de un club escolar, un grupo de jugadores o una comunidad
          <br />
          mundial de arte. En el que puedas pasar tiempo con unos cuantos amigos. Un lugar que
          <br />
          haga que hablar a diario y divertirte más a menudo sea fácil.
        </p>
        <div className="nav-discord-button">
          <button className="download-button" type="button">Descargar para Windows</button>
          <button className="nav-button" type="button">Abrir Discord en tu navegador</button>
        </div>
      </div>
      <img
        src="/one.svg"
        alt="imagen1"
        className="imgLogin"
      />
      <img
        src="/two.svg"
        alt="imagen2"
        className="imgLogin"
      />
    </div>
  );
}

export default Login;
