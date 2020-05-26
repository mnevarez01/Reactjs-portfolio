import React, { useContext } from 'react';
import CardBody from '../CardBody'
import CardImg from '../CardImage'
import CardHeading from '../CardHeading'
import './style.css'
import PageContext from '../../utils/PageContext'

const Card = () => {
  const { image, handleClick } = useContext(PageContext)
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBody />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" data-value={handleClick} />}
    </div>

  )

}

export default Card;