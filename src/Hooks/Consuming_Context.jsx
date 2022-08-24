import React from 'react'
import {Context_A,context} from './Context_A'
function Consuming_Context() {
  return (
    <div>
        <context.consumer>
         {
            user=>{
                return <div> My name is {user}</div>
            }
         }
        </context.consumer>
    </div>
  )
}

export default Consuming_Context