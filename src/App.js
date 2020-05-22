import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-route-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <Home />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Home />
      </body>
    </div>
  );
}

export default App;
