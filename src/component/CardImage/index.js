import React, { useContext } from 'react';
import PageContext from '../../utils/PageContext'

const CardImg = () => {
  const { image } = useContext(PageContext)
  return (
    <div>
      <img className="card-img" src={image} alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  )
}

export default CardImg;