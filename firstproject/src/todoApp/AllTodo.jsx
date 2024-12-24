import React from "react";
import style from "./alltodos.module.css"
export const AllTodo = (prop) => {
  console.log(prop) //{alltodos:[{},{},{}]}
  let {allTodos,handleDeleteTodo,handleEditTodo}=prop;
  return (
    <div id={style.todoWrapper}>

      {allTodos.map((ele)=>{
        console.log(ele);
        let {text,id}=ele;
        return(
          <section key={id}>
            <h1 style={{"color":"yellow"}}>
              {text}
            </h1>
            {/* <button onClick={()=>handleEditTodo(id)} >edit</button> */}
            <button onClick={() => handleEditTodo(id, "Updated text")}>Edit</button>

            <button onClick={()=>handleDeleteTodo(id)}>delete</button>
          </section>
        )
      })}
    </div>
  );
};
