import React, { useState } from 'react'

function UseStateHook() {
    // useState hook is  use to hold the state and update the state of the component.
    // It uses Array destructuring method first the varaible which holds the data.
    // Second parrameter is the fucntional parametere which is used to update the state.
    
    const initialState = 0;
    const [count, setcount] = useState(0);
    const incrementFive=()=>{
        for (let i = 0; i < 5; i++) {
            setcount(prevCount => prevCount + 1)
            // prevCount hold the prevstate value so that we can increase directly by the incrementX5
        // Button.
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={() => setcount(initialState)}>Reset</button>
            {/* setcount uses the arrow function callback for the updation of the state */}
            <button onClick={() => setcount(count + 1)}>increment </button>
            <button onClick={() => setcount(count - 1)}>decrement </button>
            <button onClick={incrementFive}>incrementX5 </button>
        </div >
    )
}

export default UseStateHook

