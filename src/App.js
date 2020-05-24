import React, { useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
import Navbar from './component/Navbar'
import Wrapper from "./component/Wrapper"


const App = () => {
  document.title = "Portfolio Testing"
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </Wrapper>
    </div>
  );
}

export default App;
