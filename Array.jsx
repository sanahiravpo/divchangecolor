import React,{useState} from 'react'

function Array() {
    const[state,setState]=useState(0)
    const[state1,setState1]=useState("")
    const array=[1,2,3,4,5]
   
    const handleclick=(state)=>{
        setState(state)
        setState1(`${state}/${array.length}`)
    }
  return (
    <>
    {array.map((x)=>( 
           <div key={x} onClick={()=>handleclick(x)} style={{height:"20px",width:"20px", margin:"5px",backgroundColor:state>=x?"green":"red"}}>{x}</div>
           ))}
           <h1>{state1}</h1>
   
    </>
  )
}

export default Array