import { useState } from "react"


const Test=()=>{
    let [count,setCount]=useState(0);
    return(
        <>
        {/* <Btn onClick={()=>{(setCount+1)}}>❤️ <sub >{count}</sub></Btn></> */}
        <h1>{count}</h1>
        <button onClick={()=>setCount+1}>❤️</button>
        </>
    )
};
export default Test;