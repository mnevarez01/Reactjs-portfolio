import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
import Navbar from './component/Navbar'
import HeaderName from "./component/Header"
import BurgerContext from "./utils/BurgerContext"



const App = () => {
  document.title = "Maria Nevarez"
  const [burger, setburgerState] = useState({
    open: "false",
    options: [],
    link: '',
    description: "",
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
        {/* <Background /> */}
        {/* <Wrapper>
          <Route exact path="/" />
          <Route exact path="/portfolio" />
          <Route exact path="/Contact" />
        </Wrapper> */}
        <HeaderName />
        <Home />
        <Portfolio />
        <Contact />
      </Router>

    </div>
  );
}

export default App;
