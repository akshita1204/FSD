import React,{useEffect,useState} from 'react'

function MyUseEffect() {
  
const[count,setCount]=useState(10);
const[pointer,setPointer]=useState(20);

useEffect(()=>
{
   console.log("Updated Value Counter:"+count);
   console.log("Updated Value Pointer:"+pointer);
},[count,pointer])



function doIncrement()
{
  setCount(count+30)
}

function doPointer()
{
    setPointer(pointer+100)
}

  return (

    <div>
        <h2>Count:{count}</h2>
        <br></br>
        <h2>Pointer:{pointer}</h2>
        <button onClick={doIncrement}>  Increment</button>
        <button onClick={doPointer}>  Pointer</button>
        MyUseEffect


    </div>
  )
}

export default MyUseEffect