import React from 'react';
import './Download.css';

function Download() {
  return (
    <div className="Download">
      <div className="download-text">
        <h1>
          UNA TECNOLOGÍA FIABLE PARA
          <br />
          MANTENERSE EN CONTACTO
        </h1>
        <p>
          Gracias a la voz y el vídeo de baja latencia, parece que estáis en la misma habitación.
          Saluda a la cámara, accede a
          <br />
          las transmisiones de los juegos de tus amigos o reuníos y
          disfrutad de una sesión de dibujo compartiendo la
          <br />
          pantalla.
        </p>
      </div>
      <img
        src="/downloadimage.svg"
        alt="descarga"
        className="imgDownload"
      />
      <div className="downloading">
        <h3>¿Todo listo para comenzar tu viaje?</h3>
        <button className="descarga-button" type="button">Descargar para Windows</button>
      </div>
    </div>
  );
}

export default Download;
