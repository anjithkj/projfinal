import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Student = () => {
var [inputs,setInputs]=useState({"Admno":'',"sname":'',"Age":'',"Status":'ACTIVE'})

const navigate = useNavigate();

const inputhandler =(event)=>{



  const{name,value}=event.target
  setInputs((inputs)=>({...inputs,[name]:value}))
console.log(inputs)
}

const savedata =()=>{
  axios.post("http://localhost:3005/snew",inputs)
  .then((reponse)=>{alert("record saved")})
  .catch(err=>console.log(err))
}

navigate('/studentview')

  return (     
    <div className='cn'>
        <Typography>REGISTRATION FORM</Typography>
        <TextField  label="Admission no" variant="outlined" name="Admno" value={inputs.Admno} onChange={inputhandler} /><br/><br/>
        <TextField label="Name" variant="outlined" name="sname" value={inputs.sname} onChange={inputhandler} /><br/><br/>
        <TextField  label="Age" variant="outlined" name="Age" value={inputs.Age} onChange={inputhandler} /><br/><br/>
        
        Status: <select name="STATUS" value={inputs.Status} onChange={inputhandler}>
          <option value='ACTIVE'>ACTIVE</option>
          <option VALUE='ACTIVE'>INACTIVE</option>
        </select>
        <br/>
        <Button variant="contained" onClick={savedata} >Submit</Button>
    </div>
  )
}

export default Student
