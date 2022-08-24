import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App'

// / First create the context value as shown in App.js
// Next export the const values.
// iimport the const value in function .
// set the value the using *.Provider* method 
// Use that value in other component.
// in other component import the useContext formt the React.
// pass the defines const value as the parameter to the function.



function ContextHook() {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ContextHook