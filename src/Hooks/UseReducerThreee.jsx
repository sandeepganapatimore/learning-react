import React,{useReducer} from 'react'
// useReducer is function
const initialState=0;
const reducer=(currentState,action)=>{
 switch(action){
    case 'increment':
        return currentState+=1;
    case 'decrement':
        return currentState-=1;
    case 'reset':
        return initialState;
    default:
        return false;
 }
}

function UseReducer() {
  const [count,dispatch]=useReducer(reducer,initialState)
  const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
<div>
    <div>Count - {count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    <div>
        <div>Count Two - {countTwo}</div>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>Reset</button>
    </div>
</div>
  )
}

export default UseReducer