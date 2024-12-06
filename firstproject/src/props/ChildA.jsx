import React from "react";

// export const ChildA = (props) => {
//     console.log(props); //{abc:"hello World"}
//   return (
//     <div>
//       <h1>{props.abc}</h1>
//     </div>
//   );
// };


export const ChildA = (x) => {
  console.log(x);
  // let {dbData}=x;
  // console.log(dbData);
  let {dbData:{data,user:{id,name}}}=x;
  console.log(data,id,name);
return (
  <div>
    <h3>Props Child</h3>
  </div>
);
}




// export const ChildA = ({dbData}) => {
//   console.log({dbData});
// return (
//   <div>
  
//   </div>
// );
// };





