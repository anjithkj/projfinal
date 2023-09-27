import { useState } from "react";
import'../Components/Product.css'

const Product = () => {

    const [c,setc]=useState("");
    const [d,setd]=useState("");
    const [f,setf]=useState("");
    const [s,sets]=useState("")
    const [error,setError]=useState("")
    
    const readc=(event) =>{
        event.preventDefault();
        setc(event.target.value)
        console.log(c);
    
    }
    const readd=(event) =>{
        event.preventDefault();
        setd(event.target.value)
        console.log(event.target.value);
    
    }
    
    const readf=(event) =>{
        event.preventDefault();
        setf(event.target.value)
        console.log(event.target.value);
    

    }
    const reads=(event) =>{
        event.preventDefault();
        sets(event.target.value)
        console.log(event.target.value)
    }
    const checkerror =(event)=>{
    event.preventDefault();
        if(c.trim ()===''|| d.trim  ==='' || f.trim ==='')
        {
            setError(true);
            return;
        }
    
    }
    const readdata=(event) => {
        event.preventDefault();
        const myobj ={
            name:c,
            price:d,
            description:f,
            sellerdeatils:s,
        }
        console.log(myobj);
    fetch(
        "https://productnamekj-default-rtdb.firebaseio.com//Item.json",
        {
            method: "POST",
            body:JSON.stringify(myobj),
            headers: {
                "Content-Type":"application/json",
            },
        }
    );

    }

    const view=(event) =>{
        event.preventDefault();
        fetch("https://productnamekj-default-rtdb.firebaseio.com//Item.json")
        .then((response)=> {
            console.log(response);
            //console.log(response.json());
            return response.json();
        
        }).then((data) => {
            console.log(data);
        })  
        
    }
    function snapshotToArray(snapshot) {
        const array = [];
    
        Object.keys(snapshot).forEach((key) => {
          array.push({ [key]: snapshot[key] });
        });
    
        return array;
      }


      return (
        <div> 
    
    
    <h1>New Product </h1>
    <div>
        
        product name :< input type="text" className="inp" onChange={readc}/><br/>
        <br/>
        </div>
        description<input type="text" className="a" onChange={readd}/><br/><br/>
        price<input type="number"className="b" onChange={readf}/><br/><br/>
        
	
        seller details<input type="text" className="c" onChange={reads} /><br/><br/>
        


        <button type="submit" className="button" onClick={readdata}>save</button>
        &nbsp;&nbsp;
        <button type="submit" className="button" onClick={view}>view</button>
        <br/>
        
        
        
        
        
        <br/>
        {error && 'Error occurs'}
           {snapshotToArray}
       
    
        </div>
      )
    }
export default Product

