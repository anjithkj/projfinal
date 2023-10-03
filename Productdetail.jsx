import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
  const param =useParams();
  return (
    <>
      <h1> product Details</h1>
      <p>{param.productId}</p>
    </>
  )
}

export default Productdetail
