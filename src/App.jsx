import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Members from './components/Members/Members';
import VoiceChats from './components/VoiceChats/VoiceChats';
import Communities from './components/Communities/Communities';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="header">
        <Login />
      </header>
      <div data-testid="members">
        <Members />
      </div>
      <div data-testid="voiceChats">
        <VoiceChats />
      </div>
      <div data-testid="communities">
        <Communities />
      </div>
      <div data-testid="download">
        <Download />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
