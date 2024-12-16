import React from 'react'
import Child2 from './Child2'

function Child1({child1data}) {
  return (
    <div>
        Child1
        {/* Name:{child1data.name} */}
        <Child2 child2data={child1data}/> 
        {/* /Appprops => child1 => child2/ */}

    </div>
  )
}

export default Child1