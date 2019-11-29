import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is an app, there are many like it, but this one is mine
        </p>
        <a
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In with Google
        </a>
      </header>
    </div>
  );
}

export default App;
