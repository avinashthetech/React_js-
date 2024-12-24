import React, { useEffect } from 'react'

export const SideEffects2 = () => {


    useEffect(()=>{
        console.log("mounted")
        let s1 =setInterval(()=>{
            console.log("Hello");
        },2000);
        return ()=>{
            console.log("unmouted");
            clearInterval(s1);
        };
    })
  return (
    <div>
<h1>SideEffects2</h1>

    </div>
  )
}
