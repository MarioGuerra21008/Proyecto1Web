import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="language">
        <img width="20px" height="15px" src="/spanish.png" alt="español" className="spanish-flag" />
        <p>Español</p>
      </div>
      <div className="social-media">
        <button className="button-svg" type="button">
          <img width="30px" height="30px" src="/twitter.svg" alt="Twitter" />
        </button>
        <button className="button-svg" type="button">
          <img width="30px" height="30px" src="/instagram.svg" alt="Instagram" />
        </button>
        <button className="button-svg" type="button">
          <img width="30px" height="30px" src="/facebook.svg" alt="Facebook" />
        </button>
        <button className="button-svg" type="button">
          <img width="30px" height="30px" src="/youtube.svg" alt="YouTube" />
        </button>
        <button className="button-svg" type="button">
          <img width="30px" height="30px" src="/tiktok.svg" alt="TikTok" />
        </button>
      </div>
      <div className="container">
        <div className="column-text">Producto</div>
        <div className="column-text">Compañía</div>
        <div className="column-text">Recursos</div>
        <div className="column-text">Políticas</div>
        <div className="column-categories">
          <div className="column-button">Descargar</div>
          <div className="column-button">Nitro</div>
          <div className="column-button">Estado</div>
        </div>
        <div className="column-categories">
          <div className="column-button">Sobre nosotros</div>
          <div className="column-button">Trabajos</div>
          <div className="column-button">Marca</div>
          <div className="column-button">Noticias</div>
        </div>
        <div className="column-categories">
          <div className="column-button">Universidad</div>
          <div className="column-button">Soporte técnico</div>
          <div className="column-button">Seguridad</div>
          <div className="column-button">Blog</div>
          <div className="column-button">Opiniones</div>
          <div className="column-button">Build</div>
          <div className="column-button">StreamKit</div>
          <div className="column-button">Creators</div>
          <div className="column-button">Community</div>
        </div>
        <div className="column-categories">
          <div className="column-button">Condiciones</div>
          <div className="column-button">Privacidad</div>
          <div className="column-button">Ajustes de cookies</div>
          <div className="column-button">Directivas</div>
          <div className="column-button">Agradecimientos</div>
          <div className="column-button">Licencias</div>
          <div className="column-button">Moderación</div>
        </div>
      </div>
      <hr />
      <div className="final">
        <button className="discord-button-footer" type="button">
          <img width="120px" height="25px" src="/discordbut.png" alt="Discord" />
        </button>
        <button className="registration" type="button">Regístrate</button>
      </div>
    </div>
  );
}

export default Footer;
