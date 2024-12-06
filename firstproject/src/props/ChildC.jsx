import React from 'react'

export const ChildC = ({setterFun}) => {
    let  data = "Hello React";
  return (
    <div>
        <h1>I am Child C</h1>
        <hr />
        <button onClick={()=>setterFun(data)} >send to parent</button>
    </div>
  )
}
