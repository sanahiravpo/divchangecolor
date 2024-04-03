import React, { useState } from 'react'

function Rating() {
    const[rating,setRating]=useState(0);
    const handleClick=(y)=>{
        setRating(y);
    }
    const array=[1,2,3,4,5]
  return (
    <>{array.map((x)=>
        <div  key={x} onClick={()=>handleClick(x)} style={{height:"20px",width:"20px",margin:"5px",backgroundColor:rating>=x?"grey":"red"}}>1</div>
    )}
 
   
    
    </>
    
  )
}

export default Rating