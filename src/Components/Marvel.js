import React from 'react'

function Marvel({ character }) {
    if (character === 'Thanos') {
        throw new Error('Not an hero')
    }
    console.log(character)
    return (
        <div>
            <h1> name is
        { character }
            </h1>
        </div>
    )

}

export default Marvel