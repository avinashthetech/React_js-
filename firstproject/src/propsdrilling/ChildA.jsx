


import React from 'react'
import { ChildB } from './ChildB';

export const ChildA = (x) => {
    // console.log(x); // {data:[{},{}]}
    // console.log(x.data); //[{},{}]
  return (
    <div>
        <ChildB users={x.data}/>
    </div>
  )
}
