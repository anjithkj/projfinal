import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Movie = (props) => {

    var[movie,setmovie]=useState(props.data)
        const handleChange =(e)=>{
            const{ name,value}= e.target
            setmovie({...movie,[name]:value})
                console.log(movie)
        
        }
   const savedata =()=>{
   console.log("button clicked")
   if(props.method === "post"){
   axios.post(" http://localhost:3000/movie",movie) 
   .then(Response=>{
    alert("succesfully added")
    //in above line is used to inform the user or site the data is added
   })
   .catch(error=>{
    alert("Faild")
   })
   }
   else if(props.method ==="put"){axios.put(" http://localhost:3000/movie/"+ movie.id,movie)
   .then((response)=>{
    console.log("put data"+response.data)
    alert("sucess")
    window.location.reload(false);
   })
  .catch((err)=>{
    console.log(err)
  })}
}
  return (
    <div>
      <Typography variant='h6'>Add movies details</Typography><br></br>

    <br></br>
      <TextField label="moviename" variant='outlined' name='Year' value={movie.name}onChange={handleChange }/><p></p>
      <TextField label="director"  variant='outlined' name='director' value={movie.director}onChange={handleChange }/><p></p>
      <TextField label="language" variant='outlined' name='language' value={movie.Language}onChange={handleChange }/><p></p>
      <TextField label="genere" variant='outlined' name='genere' value={movie.genere}onChange={handleChange }/><p></p>
      <TextField label="releaseyear" variant='outlined' name='release' value={movie.Releaseyear}onChange={handleChange }/><p></p>
      
      <Button variant='contained' onClick={savedata}>Submit</Button>


    </div>
  )
}

export default Movie
