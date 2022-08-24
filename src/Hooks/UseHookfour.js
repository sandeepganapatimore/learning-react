import React,{useState} from 'react'

function UseHookfour() {
    const [item,SetItem]=useState([])
 const addItem=()=>{
    SetItem([...item,{
        id:item.length,
        value:Math.floor(Math.random()*10)+1
    }])
 }
  return (
    <div>
        <button onClick={addItem}>Add Number</button>
        <ul>
           {
            item.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))
           }
        </ul>
    </div>
  )
}

export default UseHookfour