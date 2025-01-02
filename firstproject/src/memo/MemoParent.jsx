import React, { useCallback, useMemo, useState } from "react";
import MemoChild1 from "./MemoChild1";

const MemoParent = () => {
  let [add, setAdd] = useState(0);
  let [minus, setMinus] = useState(100);

  // function multiple(){
  //     console.log("************");
  //     return add*10;
  // }

  // useMemo (callback function ,dependency)
  // it is used for performance optimization , itreturn memoized value
  let val = useMemo(() => {
    console.log("**********");
    return add * 10;
  }, [add]);


//   function display(){
//     console.log("display fucntion ");
//   }

//! useCallback(callbackFunc,dependency)
// it is used for performance optimization , itreturn memoized function
  let display=useCallback(()=>{
    console.log("display func")

  },[])
  return (
    <div>
      <h1>Learn useMemo hook</h1>

      <h2>Multiplication {val}</h2>
      <h2>
        Addition{add}
        <button onClick={() => setAdd(add + 1)}>incre</button>
      </h2>

      <h2>
        Subtraction {minus}
        <button onClick={() => setMinus(minus - 1)}>decre</button>
      </h2>
      <MemoChild1 display={display} />
    </div>
  );
};

export default MemoParent;
