import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Basic React App
        </h2>
        <p>
          React App deployment on Surge via Github Actions CICD.
        </p>
      </header>
    </div>
  );
}

export default App;
