import React from 'react'
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import './Home.css'
const Home = () => {
  return (
    <div className='tt'>
        <h2 className='cs'>LOGIN</h2>
      <p>
      <TextField label="Name" color="primary" focused /><br></br><br></br>
      <TextField label="Password" color="secondary" focused /><br></br><br></br>
      <Button variant="contained">Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined">Reset</Button>
      <br>
      </br>

  
        
    </p>
    </div>
  )
}

export default Home
