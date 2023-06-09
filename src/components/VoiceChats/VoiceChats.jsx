import React from 'react';
import './VoiceChats.css';

function VoiceChats() {
  return (
    <div className="VoiceChats" data-testid="voiceChats">
      <div className="voicechats-text">
        <h1>
          Donde es fácil
          <br />
          pasar el rato
        </h1>
        <p>
          Entra en un canal de voz cuando estés libre.
          <br />
          Los amigos que tengas en tu servidor podrán
          <br />
          ver que estás conectado y unirse al instante
          <br />
          para hablar sin necesidad de llamar.
        </p>
      </div>
      <img
        src="/voicechats.svg"
        alt="vc"
        className="imgVoiceChats"
      />
    </div>
  );
}

export default VoiceChats;
