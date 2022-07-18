import React from 'react'
import myStyles from './myStyles.css'

function Stylesheet(prop) {
    let classname=prop.primary?'primary':''
  return (
    <div>
        <h1 className={`${classname} font-xl`}>Style sheets</h1>
    </div>
  )
}

export default Stylesheet