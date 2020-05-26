import React, { useContext } from 'react';
import PageContext from '../../utils/PageContext'


const CardText = () => {
  const { title } = useContext(PageContext)
  return <h3>{title}</h3>
}

export default CardText;