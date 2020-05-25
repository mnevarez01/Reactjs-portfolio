import React, { useState, useContext } from 'react';
import Navbar from "../Navbar"
import BurgerContext from "../../utils/BurgerContext.js"

function BurgerMenu() {
  const { open, options, link } = useContext(BurgerContext)

  return (

    <div className='menu-bar'
      onClick={open}>
      <ul>
        {options.map(item => (
          <>
            <li>{options}</li>
            <button>{link}</button>
          </>
        ))}
      </ul>


    </div>
  )



}

export default BurgerMenu;
