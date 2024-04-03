import React, { useState } from 'react'

function Buton() {
    const[count,setCount]=useState(0);

    const handleclick=()=>{
        setCount(count+1);


    }
  return (
 <>

 <button  style={{backgroundColor:count!=0 && (count)%3==0?"green":"red"}}onClick={handleclick} >click me</button>
 </>
  )
}

export default Buton