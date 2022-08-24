import React, { useReducer } from 'react'
// useReducer is function
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState,firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState,firstCounter: currentState.firstCounter - action.value}          
        case 'increment 5':
            return { secondCounter: currentState.secondCounter + action.value }
        case 'decrement 5':
            return { secondCounter: currentState.secondCounter - action.value}       
        case 'reset':
            return initialState;
        default:
            return false;
    }
}

function UseReducerTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>first Count - {count.firstCounter}</div>
            <div>Secound Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value:1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement',value:1 })}>Decrement</button>
            <br/>
            <button onClick={() => dispatch({ type: 'increment 5', value:5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement 5',value:5 })}>Decrement 5</button>
            <br/>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerTwo