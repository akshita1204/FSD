import React,{useEffect,useState} from 'react'

function MyUseEffect() {
  
const[count,setCount]=useState(10);

useEffect(()=>
{
   console.log("Updated Value:"+count);
})

function doIncrement()
{
  setCount(count+30)
}

  return (

    <div>
        <h2>{count}</h2>
        <button onClick={doIncrement}>  Increment</button>
        MyUseEffect


    </div>
  )
}

export default MyUseEffect