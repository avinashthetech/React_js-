import React from 'react'
import { ChildA } from './ChildA';

export const PropsDrillingParent = () => {
    let user = [{id:1,ename:"jhon"},
        {id:2,ename:"Doe"}]
    
  return (
    <div> <ChildA data={user}/></div>
  )
}
