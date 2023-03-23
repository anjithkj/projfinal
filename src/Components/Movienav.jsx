import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState,setmovie } from 'react'
import Movie from './Movie'

const Movienav = () => {
var[update,setUpdate]=useState(false)
var[singlevalue,setSinglevalue]=useState([])
  var [movie,setmovie] = useState([])
useEffect(()=>{
    axios.get("http://localhost:3000/movie")
    .then(response=>{
        console.log(response.data)
        setmovie(movie=response.data)
    })
    .catch(err=>console.log(err))
})
const updatevalue =(value)=>{
    setSinglevalue(value);
    setUpdate(true);
}
const deletemovie=(id)=>{
    console.log("delete clicked"+id);
    axios.delete(" http://localhost:3000/movie/"+id)
    .then(response=>{
        alert("deleted")
        window.location.reload(false)
    })
}

var finalJSX=<TableContainer>
<Table>
      <TableHead>
        <TableRow>
        <TableCell>Year</TableCell>
    <TableCell>Genre</TableCell>
    <TableCell>Rating</TableCell>
    <TableCell>Director</TableCell>
    <TableCell>Producer </TableCell>
    <TableCell>cast</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {Movie.map((value,index)=>{
            return<TableRow>
                <TableCell>{value.moviename}</TableCell>
            <TableCell>{value.director}</TableCell>
            <TableCell>{value.language}</TableCell>
            <TableCell>{value.genere}</TableCell>
            <TableCell>{value.releaseyear}</TableCell>
           
            <TableCell><Button onClick={()=>deletemovie(value.id)}>DELETE</Button></TableCell>
            
            </TableRow>
        })}
        


    </TableBody>
    </Table>
    </TableContainer>
    if(update)
    finalJSX =<Movie data={singlevalue} method="put"/>
  return (
    <div>
<br>
</br>
<br></br>
    {finalJSX}
</div>
  )
}



export default Movienav
