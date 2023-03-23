import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Moviehome = () => {
  


  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">Review page
            {/* <Link to='/' style={{color:'white',textDcoration:'none'}}>React</Link> */}
      
          </Typography>
          <Button color="inherit" variant="text"><Link to='/ Movienav' style={{color:'white',textDcoration:'none'}}>VIEW</Link></Button>
          <Button color="inherit"  variant="text"><Link to='/Movie' style={{color:'white',textDcoration:'none'}}>ADD</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
 
    </div>
  )
}

export default Moviehome
