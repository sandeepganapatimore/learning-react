import React,{useEffect,useState} from 'react'


function IntervalHookCounter() {

const [count,setcount]=useState(0);
const tick=()=>{
    setcount(count+1); // setcount(Prevcount=>Prevcount+1) this is also another way to increase the counter.
}
useEffect(()=>{
    // if we want  call the function in useEffect its better to define the function inside the useEffect rather than calling it.
    // For Example.

    // function doSomething(){
    //     console.log(someProp)
    // }
  const interval=setInterval(tick,1000);

  return ()=>{
    clearInterval(interval);
  }
},[count]) // If we use above commented code then we can remove the count from the dependency array.

  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter