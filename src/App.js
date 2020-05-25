import React, { useState } from 'react';
// import PortfolioContext from './utils/PortfolioContext'
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
import Navbar from './component/Navbar'
import Background from "./component/Background";
import BurgerContext from "./utils/BurgerContext"


const App = () => {
  document.title = "Portfolio Testing"
  const [burger, setburgerState] = useState({
    open: "false",
    options: ["testing", "testing2"],
    link: ['testing', 'testing 2'],
    onClick: (open) => {
      setburgerState({ ...burger, open })
    }
  })
  return (
    <div>
      <Router>
        <BurgerContext.Provider value={burger}>
          <Navbar />
        </BurgerContext.Provider>
        <Background />
        {/* <Wrapper>
          <Route exact path="/" />
          <Route exact path="/portfolio" />
          <Route exact path="/Contact" />
        </Wrapper> */}
        <Home />
        <Portfolio />
        <Contact />
      </Router>

    </div>
  );
}

export default App;
