import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Movie = () => {

    var[movie,setmovie]=useState({
        Year:"",
        genre:"",
        rating:"",
        Director:"",
        Producer:"",
        Cast:""
    })
        const handleChange =(e)=>{
            const{ name,value}= e.target
            setmovie({...movie,[name]:value})
                console.log(movie)
        
        }
   const savedata =()=>{
   console.log("button clicked")
 //  axios.post("http://localhost:3005/student",movie)
   .then(responce=>{
    alert("succesfully added")
    //in above line is used to inform the user or site the data is added
   })
   .catch(error=>{
    alert("Faild")
   })
   }
  return (
    <div>
      <Typography variant='h6'>Add movies details</Typography><br></br>

    <br></br>
      <TextField label="year" variant='outlined' name='Year' value={movie.Year}onChange={handleChange }/><p></p>
      <TextField label="Genre"  variant='outlined' name='Genre' value={movie.genre}onChange={handleChange }/><p></p>
      <TextField label="Rating" variant='outlined' name='Rating' value={movie.rating}onChange={handleChange }/><p></p>
      <TextField label="Director" variant='outlined' name='Director' value={movie.Director}onChange={handleChange }/><p></p>
      <TextField label="Producer" variant='outlined' name='Producer' value={movie.Producer}onChange={handleChange }/><p></p>
      <TextField label="Cast" variant='outlined' name='cast' value={movie.Cast}onChange={handleChange }/><p></p>
      <Button variant='contained' onClick={savedata}>Submit</Button>


    </div>
  )
}

export default Movie
