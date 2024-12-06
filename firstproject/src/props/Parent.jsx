import { useState } from 'react';
import { ChildA } from './ChildA';
import ChildB from './ChildB';
import { ChildC } from './ChildC';

// export const Parent = () => {
//     let data="hello world";
//   return (
//     <div>
//         <ChildA abc={data}/>
//     </div>
//   )
// }




export const Parent = () => {

  let [state,setState]=useState("");

  let data=[10,20,30,40]
  let user={id:1,name:"Avinash"}

  function Display(){
    console.log("I am display func");
  }
return (
  <div><h3 >Props Parent</h3>
      <ChildA dbData={{data,user}}/>
      <ChildB fun={Display}/>
      <ChildC setterFun={setState} />
      <hr />
      {state}

      
  </div>
)
}


