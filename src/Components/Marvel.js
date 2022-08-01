import React from 'react'

function Marvel({character}) {
    if (character === 'Thanos') {
        throw new Error('Not an hero')
    }
    console.log(character)
    return (
        <div>
           {character}
        </div>
    )

}

export default Marvel