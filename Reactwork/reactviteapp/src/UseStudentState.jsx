import React,{useState} from 'react'

function UseStudentState() {
    const [count,setcount]=useState(20);

   function doIncrement()
   {
    console.log("Hi inside do increment");
    setcount(count+10);
   }
   function doDecrement()
   {
    console.log("Hi isdide do decrement");
    setcount(count-5);
   }

  return (
    <>
    <div style={{color:'red',border:'2px solid black',width:'400px',height:'400px',marginLeft:'500px',paddingLeft:'150px',fontSize:'50px',backgroundColor:'cornsilk'}}>{count}
    
    <div>
      <button id='btn' onClick={doIncrement} style={{backgroundColor:'plum'}}>Increment</button>
      <button id='btn' onClick={doDecrement} style={{backgroundColor:'plum'}}>Decrement</button>
    </div>
    </div>
    </>

  )
}

export default UseStudentState