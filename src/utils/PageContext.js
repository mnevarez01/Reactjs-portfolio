import React from 'react';

const PageContext = React.createContext({
  image: [],
  title: "",
  link: "",
  description: '',
  handleClick: () => undefined
});

export default PageContext;