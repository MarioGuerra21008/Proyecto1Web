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
    <div className="App">
      <header className="header">
        <Login />
      </header>
      <div>
        <Members />
      </div>
      <div>
        <VoiceChats />
      </div>
      <div>
        <Communities />
      </div>
      <div>
        <Download />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
