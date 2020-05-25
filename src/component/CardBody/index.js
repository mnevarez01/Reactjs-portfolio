import React, { useContext } from 'react';
import PageContext from '../../utils/PortfolioContext'

const CardBody = () => {
  const { description } = useContext(PageContext)
  return (
    <>
      <p>
        Description: {description}
      </p>
    </>
  )
}

export default CardBody;