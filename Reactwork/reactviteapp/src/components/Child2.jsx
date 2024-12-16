import React from 'react'
import Child3 from './Child3'

function Child2({child2data}) {
  return (
    <div>Child2
        {/* Branch:{child2data.branch} */}
        <Child3 child3data={child2data}/>
    </div>
  )
}

export default Child2