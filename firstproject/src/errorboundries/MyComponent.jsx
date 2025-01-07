import React from 'react'
import { useState } from 'react'

const MyComponent = () => {

    let [count,setCount]=useState({value:0})


    function increment(){

        if(count.value>=10){
            throw new Error("count value should not be greater than 10")
        }
        setCount({value:count.value+1});
    }
  return (
    <div>

        <h1>Counter {count.value}</h1>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default MyComponent