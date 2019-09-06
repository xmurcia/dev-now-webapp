import React from 'react';
import logo from './logo.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          &lt;dev-now /&gt;
        </h1>
        <h2>Find the talent, work in a better place to be.</h2>
      </header>
    </div>
  );
}

export default App;
