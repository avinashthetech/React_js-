import { useState } from "react"


const Counter=()=>{
    console.log("conuter component");
    let [count,setCounter]=useState(0);
    

    return (
        <>
        <h1>Counter {count}</h1>
        <button onClick={()=>{setCounter(count+1)}}>increment</button>

        <button onClick={()=>{if (count>0){
            setCounter(count-1)
        }
            
            }}>decrement</button>
        <button onClick={()=>{setCounter(count)}}>Reset</button>


        </>
    )
};
export default  Counter;