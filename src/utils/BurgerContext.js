import React from 'react';

const BurgerMenu = React.createContext({
  open: "false",
  options: ["testing", "testing2"],
  link: ['testing', 'testing 2'],
  handleClick: () => undefined
})

export default BurgerMenu;