import React, { useContext } from "react";
import { GlobalData } from "./ContextParent";

// Step 3 :-consuming a context
const ContextChildB = () => {
  let val = useContext(GlobalData);
  console.log(val);

  return <div>
    <h1>Consuming data from context</h1>
    <br />
    {
        val.map((ele)=>{
            let {id,text}=ele;
            return(
                <section key={id}>
                    <h4>{text}</h4>
                </section>
            )
        })
    }
  </div>;
};

export default ContextChildB;
