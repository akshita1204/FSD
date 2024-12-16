import React from 'react'
import Child1 from './components/Child1';

function Appprops() {
    const data={
        name:"Akshita",
        branch:"CSE",
        section:"B"
    }
  return (
    <div>Appprops
        <Child1 child1data={data}/>
    </div>
  )
}

export default Appprops;
// it is the parent file 