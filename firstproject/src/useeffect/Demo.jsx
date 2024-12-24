import React, { useState } from 'react'
import { useEffect } from 'react';

export const Demo = () => {

    let [count ,setCount]=useState(0);

    useEffect(()=>{
        console.log("render")
    })

    useEffect(()=>{
        console.log("CM")
        return ()=>{
            console.log("CUM")

        }
    },[])


    useEffect(()=>{
        console.log("CU");
        return ()=>{
            console.log("GUC");
        }
    },[count])

  return (
    <div>
        <h1>Demo useEffect using LifeCycle Method</h1>

<h2>Counter{count}</h2>
<button onClick={()=>setCount(count+1)}>Click</button>

    </div>
  )
}
