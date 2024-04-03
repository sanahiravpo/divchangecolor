import React,{useReducer} from 'react'

function UseReducer() {
    const initialvalue={count:0}
const Reducer=(state,action)=>{
  
    switch (action.type){
 case "increment":
    return  {count:state.count+1};

    default:
        return state;
    }
  


}
     const[state,dispatch]=useReducer[Reducer,initialvalue]
  return (
    
    <div>
        {state.count}
<button onClick={()=>dispatch({type:"increment"})} >increment</button>

    </div>
  )
}

export default UseReducer