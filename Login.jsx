// import React, { useState } from 'react'
// import'../Components/Product.css'
// const Login = () => {

//     const [ema,setema]=useState("");
//     const [pass,setpass]=useState("");
//     const [error,setError]=useState("");

//     const readema=(event) =>{
//         event.preventDefault();
//         setema(event.target.value)
//         console.log(ema);
//     }

//     const readpass=(event) =>{
//         event.preventDefault();
//         setpass(event.target.value)
//         console.log(pass);
//     }
//     const readloki =(event) => {
//         event.preventDefault();
//         if(ema.trim () ==='' || pass === '' )
//         {
//             setError(true);
//             return;
//         } 
//         else
//         {
//             setError(false);
//         }
//         const readdata=(event)=>{
//             event.preventDefault();
//             const myobj ={
//                 email:ema,
//                 password:pass
//             }
     
// console.log(myobj)
//         }
       
        
//     }
   


//   return (
//     <div>
//         <form>

       
//        email :< input type="text" className="inp" onChange={readema}/><br/>
//         <br/>
        
//         password<input type="passwprd" className="a" onChange={readpass}/><br/><br/>
       
//         <a href="/Home">
//         <button type="submit" className="button" onClick={readloki}>Login </button>
//         &nbsp;&nbsp;</a>
//         <button type="submit"  >Signup</button>
//         <br/></form>
//     </div> 
//   )
// }

// export default Login
