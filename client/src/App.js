import React, { Component } from 'react';
import Names from './components/Names';
import reactLogo from './reactLogo.svg';
import expressLogo from './expressLogo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="react-header">
          <img src={reactLogo} className="react-logo" alt="logo" />
          <a
            className="react-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </div>
        <div className="express-header">
          <img src={expressLogo} className="express-logo" alt="logo" />
          <a
            className="express-link"
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn Express
          </a>
        </div>
        </header>
        <Names />
      </div>
    );
  }
}

export default App;
