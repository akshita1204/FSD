import React, { createContext } from 'react'
import Child1Context from './contextcomponent/Child1Context';

const mycontext=createContext(); //mycontext is created 
function AppContext() {
    const data=
    {
      name:"Akshita",
      branch:"CSE",
      section:"B"
    }
  return (
    //Provider is used with mycontext 
    <mycontext.Provider value={data}>  
        <Child1Context/>

    </mycontext.Provider>
  )
}
export
{
    mycontext
}
export default AppContext;