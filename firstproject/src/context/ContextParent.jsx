import React, { createContext } from "react";
import { ContextChildA } from "./ContextChildA";

//Step !:- creating a context
// createContext() return a object
export let GlobalData = createContext();

export const ContextParent = () => {
  console.log(GlobalData); //it will print context object

  let data = [
    { id: 1, text: "hello" },
    { id: 2, text: "hii" },
  ];

  return (
    <div>
      {/* Step 2:- Providing a context    {use a props}  */}
      <GlobalData.Provider value={data}>
        <ContextChildA />
      </GlobalData.Provider>
    </div>
  );
};
