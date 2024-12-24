import React, { useEffect, useState } from "react";

const SideEffects = () => {


    let [count,setCount]=useState(0);  // array de-structuring 
    //! SYNTAX==> useEffect(()=>{},[dependancy array])
//! RENDER
    useEffect(()=>{
        console.log("render")
    })
//! componentDidMount
    useEffect(()=>{
        console.log("COMPONENT MOUNTED");
//componentWillUnmount
        return ()=>{
            console.log("COMPONENT UNMOUNTED")
        }
    },[]);
//! componentDidUpdate

useEffect(()=>{
    console.log("COMPONENT UPDATED");


    return ()=>{     // getSnapshotBeforeUpdate

        console.log("prev state was ",count)
    }
},[count]);



  return (
    <div>
      <h1>Learn UseEffect</h1>
      <h2>Counter{count}</h2>
      <button onClick={()=>setCount(count+1)}> Clcik</button>
    </div>
  );
};

export default SideEffects;
