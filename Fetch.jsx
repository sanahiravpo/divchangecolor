import React from 'react'
import { useEffect,useState } from 'react'
function Fetch() {
    const[data,setdata]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
            const response =await fetch("https://api.postalpincode.in/pincode/676304");
            const result=await response.json();
            setdata(result[0].PostOffice  );
              
            console.log(result);
        }
        fetchdata();
    },[data])
   
  return (
   <>

   </>
  )
}

export default Fetch