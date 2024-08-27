import React, { useReducer, useState } from 'react'

export const Reducer1 = () => {
    const [count,setCount] = useState(0)
    const [option,setOption] = useState(1)

    const [counter,dispatch] = useReducer((state,action)=>{
      
        switch(action.type){
            case  'plus': return state + 1;
            case 'minus' : return state - 1;
            case 'byamount' : return state + action.payload;
            default : return state;
        }
          
    },0)

    const onSelect =(e)=>{
        console.log(e.target.value);
        setOption(Number(e.target.value))
        
    }
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
        <select defaultValue={1} name="name" id="id" onChange={onSelect}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <button onClick={()=>dispatch({type:"byamount",payload:option})}>
            {option}
        </button>
      
    </div>
  )
}
