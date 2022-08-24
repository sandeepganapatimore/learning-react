import React from 'react'
export    const  context = React.createContext()

function Context_A() {
  return (
    <div className='App'>
   <context.Provider value={"Sandeep"}>

   </context.Provider>
    </div>
  )
}

export default Context_A