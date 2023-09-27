import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Register = () => {
    
  return (
    <div className='ts'>
      <h2>Register</h2>
      <br></br>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField color="secondary" 
          id="outlined-secondary"
          label="Name"
          defaultValue="eg:anjith"
        />
        <TextField
          
          id="outlined-error-helper-text"
          label="Address"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          
          id="filled-error"
          label="mobile no"
          defaultValue="12345667"
          variant="filled"
        />
        <TextField
          
          id="filled-error-helper-text"
          label="Qualification"
          defaultValue="eg:mca"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          
          id="standard-error"
          label="preference"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
        
          id="standard-error-helper-text"
          label="skills"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>



    </div>
  )
}

export default Register
