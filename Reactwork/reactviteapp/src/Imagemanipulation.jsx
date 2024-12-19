import React, { useState } from 'react'
import cat from './assets/cat.jpg'
function Imagemanipulation() {

  const [height,setHeight]=useState(200);
  const [width,setWidth]=useState(200);
  const[rotateimg,setRotate]=useState(0);
  const[red,setRed]=useState();
  const[blue,setBlue]=useState();
  const[green,setGreen]=useState();


  function enhanceHeight()
  {
    setHeight(height+30);
  }
  function enhanceWidth()
  {
    setWidth(width+30);
  }
  function rotateImage()
  {
    setRotate(rotateimg+30);
  }
  function changeBackground()
 {
   setRed(Math.random() * 255)
   setGreen(Math.random() * 255)
   setBlue(Math.random() * 255)
 }
  return (
    <div style={{border:'2px solid black',height:'500px', width:'700px', marginLeft:'300px',marginRight:'200px',backgroundColor:'brown' }}>
    
    <div style={{backgroundColor:`rgb(${red},${green},${blue})`,border:'1px solid black',height:'200px',width:'200px',marginLeft:'250px',marginTop:'150px'}}>
        <img src={cat} style={{transform:`rotate(${rotateimg}deg)`}}  height={height} width={width} ></img>
    </div>


    <div style={{marginTop:'100px',marginLeft:'100px'}}>
     <button id='btn' onClick={enhanceHeight}>Enhance Height</button>
     <button id='btn' onClick={enhanceWidth}>Enhance Width</button>
     <button id='btn' onClick={rotateImage}>Rotate</button>
     <button id='btn' onClick={changeBackground}>Change Background Color</button> 
    </div>

    </div>

  )
}
export default Imagemanipulation; 
