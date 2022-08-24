import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0);
    const [y,SetY]=useState(0);

    const logMousePosition=e=>{
        console.log('Mouse Position');
        setX(e.clientX);
        SetY(e.clientY);
    }

    useEffect(()=>{
        console.log("Mouse Event ")
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
        window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
        Hook X- {x}  Y -{y}
    </div>
  )
}

export default HookMouse