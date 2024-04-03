import React,{useState} from 'react'

function Divs() {
    const[color,setcolor]=useState(true)

    const handleclick=()=>{
        setcolor(!color)

    }
  return (
    <>

<div  onClick={handleclick} style={{height:"40px",width:"40px",backgroundColor:color?"black":"white"}}></div>
<div  onClick={handleclick} style={{height:"40px",width:"40px",backgroundColor:color?"white":"black"}}></div>
    </>
   
  )
}

export default Divs