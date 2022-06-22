import React from 'react';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          U.S. Marine Corps Software Factory Hello World
        </p>
        <a
          className="App-link"
          href="https://github.com/Patrick-Sherlund/mcswf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
      </header>
    </div>
  );
}

export default App;
