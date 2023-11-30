import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [un,setUn]=useState('')
  const [pwd,setPwd]=useState('')
const[error,setError]=useState(false)
const navigate=useNavigate();


  const  readusername = (event) =>{
    event.preventDefault();
   setUn(event.target.value);
console.log(un);
  }

  const  readpassword = (event) =>{
    event.preventDefault();
   setPwd(event.target.value);
   console.log(pwd);

  }
  const savedata = (event)=>{
event.preventDefault();
if (un.trim()==='' ||pwd.trim() ==='')
{
setError(true)
return
}
else
{
setError(false)
navigate('/home')


}
  }
  
  
  
    return (
    <div>
      <h1 className='cn'>SIGN IN</h1>
      <p className='co'>
      Username <input type='text' onChange={readusername} /><br></br>
      Password <input type='password' onChange={readpassword} /><br></br>
      <button type='submit' onClick={savedata}>Login</button>
     
      </p>
      <p className='er'>{error && 'All fields must be entered'}</p>
    </div>
  )
}

export default Login
