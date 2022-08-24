import React, { useState, useEffect } from 'react'

function UseEffectOne() {
    const [count, setcount] = useState(0);
    const [name, setname] = useState('');

    useEffect(() => {
        console.log('Updating document title')
        document.title = `you clicked ${count}`
    }, [count, name])
    return ( < div >
        <
        input type = "text"
        value = { name }
        onChange = {
            e => setname(e.target.value)
        }
        />

        src / Hooks / UseHookfour.js < button onClick = {
            () => setcount(count + 1)
        } > Click { count }
        times < /button> < /
        div >
    )
}

export default UseEffectOne