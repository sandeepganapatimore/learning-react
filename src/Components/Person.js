import React from 'react'

// props must be passed in lower  case letter word

function Person({ person }) {
  return (
    <div>
      <h2>I am {person.id}. I am {person.prof} and I am {person.age} old</h2>
    </div>
  )
}

export default Person