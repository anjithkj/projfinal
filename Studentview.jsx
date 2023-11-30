import {TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
const Studentview = () => {
var[students,setStudents] = useState([]);
useEffect(()=>{
    axios.get("http://localhost:3005/sview")
    .then(response =>{
        console.log(response.data)
        setStudents(response.data)
    } )
    .catch(err=>console.log(err))
})

const deletevalues =(id)=>{
console.log("deleted",id)
axios.put("http://localhost:3005/updatestatus/"+id)
.then((response)=>{
alert("DELETED")
window.location.reload(false);

})
}


  return (
    <div>
        <Typography>STUDENT VIEW</Typography><br/>
        <TableContainer><table>
            <TableHead>
    <TableRow>
        <TableCell>Admission no</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Delete</TableCell>
        <TableCell>Update</TableCell>
    </TableRow>
   </TableHead>
   
        
<TableBody>
    {students.map((value,index)=>{
        return(
            <TableRow key={index}>
                <TableCell>{value.Admno}</TableCell>
                <TableCell>{value.sname}</TableCell>
                <TableCell>{value.Age}</TableCell>
                <TableCell>{value.Status}</TableCell>
                <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}></DeleteForeverIcon></TableCell>
                <TableCell><CreateIcon color='sucess'></CreateIcon></TableCell>
            </TableRow>
        )
    })}
</TableBody>
</table>
</TableContainer>
    </div>
  )
}

export default Studentview
