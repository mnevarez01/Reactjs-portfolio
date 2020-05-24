import React from 'react';

const PageContext = React.createContext({
  image: [],
  title: "",
  link: "",
  handleClick: () => undefined
});

export default PageContext;