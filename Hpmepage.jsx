import React from 'react'
import'../Components/Style.css'
import { Link } from 'react-router-dom'
const Hpmepage = (props) => {
  return (
    <div>
      <h1 className='c'>
        welcome
        <br></br>
      <button onClick={props.checklogout} className='button'>logout</button>
      <Link to={"/Register"}>next</Link>
      
      </h1>
    </div>
  )
}

export default Hpmepage
