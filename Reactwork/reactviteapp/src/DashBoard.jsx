import React, { useEffect } from 'react'
import { useState } from 'react';

function DashBoard() {
    const[data,setData]=useState([]);

function getonlineData()
{
    const onlinedata=fetch('https://dummyjson.com/recipes');
    onlinedata.then((response)=>{
      response.json().then((res)=>
    {
   console.log(res.recipes);
   setData(res.recipes);
    })
    })
}
getonlineData()

  return (
    <div >DashBoard
        {/* <div>{JSON.stringify(data)}</div> */}
        {
            data.map((ele)=>
            {
                return(
                    <div style={{border:'2px solid black'}}>
                        <div><img src={ele.image} height="150" width="150"/></div>
                        <div>{ele.name}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DashBoard