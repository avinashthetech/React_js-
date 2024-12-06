import React from 'react'
const ChildB = ({fun}) => {
  return (
    <div><p>I am child B</p>
    <button onClick={fun}> Click</button></div>
  )

};

export  default ChildB;
