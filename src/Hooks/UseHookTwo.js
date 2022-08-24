import React, { useState } from 'react'

function UseHookTwo() {
    const [name, setName] = useState({ firstName: " ", LastName: " " })
    return (
        <div>
            <input type="text"
                value={name.firstName}
                onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
            <input type="text"
                value={name.LastName}
                onChange={(e) => setName({ ...name, LastName: e.target.value })}
            />
            <h2>Your  first Name is : {name.firstName}</h2>
            <h2>Your  last Name is : {name.LastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default UseHookTwo
