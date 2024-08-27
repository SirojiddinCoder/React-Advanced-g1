import React, { useReducer, useState } from 'react'

export const Reducer1 = () => {
    const [count,setCount] = useState(0)

    const [counter,dispatch] = useReducer((state,action)=>{
      
        switch(action.type){
            case  'plus': return state + 1;
            case 'minus' : return state - 1;
            case 'byamount' : return state + action.payload;
            default : return state;
        }
          
    },0)
  return (
    <div>
        <h2>State</h2>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count - 1)}>-</button>
        <button onClick={()=>setCount(count  + 1)}>+</button>
        <hr />
        <h2>Reducer</h2>
        <h2>Counter:{counter}</h2>
        <button onClick={()=>dispatch({type:"minus"})}>-</button>
        <button onClick={()=>dispatch({type:"plus"})}>+</button>
        <button onClick={()=>dispatch({type:"byamount",payload:5})}>5</button>
        <button onClick={()=>dispatch({type:"byamount",payload:10})}>10</button>
        <button onClick={()=>dispatch({type:"byamount",payload:15})}>15</button>
    </div>
  )
}
