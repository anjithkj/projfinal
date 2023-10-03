import React, { useState } from 'react'
import'../Components/Style.css'
import { Link } from 'react-router-dom';

const Newlogin = (props) => {
    const [email, setemail] = useState("");
const [pass, setpass] = useState("");

const emailHandler =(event)=>{
    console.log(event.target.value);
    setemail(event.target.value);
  
}

const passHandler =(event)=>{
    console.log(event.target.value);
    setpass(event.target.value);
}

const onsub =(event)=> {
    event.preventDefault();
    
    
    props.xxx(email,pass)
    

}
 


  return (
    <div className='App'>
    <div >
    
    </div><h3 className='center'>Login</h3>
    <form onSubmit={onsub} className='center'>
      Email <input onChange={emailHandler} type='text' className='a'></input><br /><br />
      password <input onChange={passHandler} type='password' className='b'></input><br></br><br></br>
      <button type='submit' className='button'>Submit</button>
      </form>
      {props.bbbb}
      <Link to={"/Hpmepage"}>next</Link>
      <Link to={"/Register"}>next</Link>
    
  


    </div>
  )
}

export default Newlogin
