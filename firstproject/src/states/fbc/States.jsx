import { useState } from "react";

const States=()=>{
    let [state,setState]=useState("hello");
    let [cart,setCart]=useState("add to cart");
    //console.log(state);

    function btnclick(){
        console.log("btn clicked");
        setState("Byeeee")
    }
    return (
        <>
        <h1>States in FFB {state}</h1>
        <button onClick={btnclick}>Click</button>
        <hr />
        <button onClick={()=>{setCart("go to cart")}}>{cart}</button>
        </>
    );
};

export default States;

