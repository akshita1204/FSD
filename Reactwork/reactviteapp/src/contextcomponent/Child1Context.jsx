import React, { useContext } from 'react'
import { mycontext } from '../AppContext';

function Child1Context() {
    const child1context=useContext(mycontext);
  return (
    <div>
        Name:{child1context.name}
    </div>
  )
}

export default Child1Context