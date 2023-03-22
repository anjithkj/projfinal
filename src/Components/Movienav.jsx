import { Button, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Movienav = () => {

  var [movie,movie] = useState([])
useEffect(()=>{
    axios.get("http://localhost:3005/student")
    .then(response=>{
        console.log(response.data)
        setmovie(movie=response.data)
    })
    .catch(err=>console.log(err))
})
const deletemovie=(id)=>{
    console.log("delete clicked"+id);
    axios.delete("http://localhost:3005/student/"+id)
    .then(response=>{
        alert("deleted")
        window.location.reload(false)
    })
}



  return (
    <div>
      <Typography>Welcome to my App</Typography>
    <TableContainer>
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
        {students.map((value,index)=>{
            return<TableRow>
                <TableCell>{value.Year}</TableCell>
            <TableCell>{value.Genre}</TableCell>
            <TableCell>{value.Rating}</TableCell>
            <TableCell>{value.Director}</TableCell>
            <TableCell>{value.Producer}</TableCell>
            <TableCell>{value.Cast}</TableCell>
            <TableCell><Button onClick={()=>deletemovie(value.id)}>DELETE</Button></TableCell>
            
            </TableRow>
        })}
        


    </TableBody>
    </Table>
    </TableContainer>
</div>
  )
}



export default Movienav
