import React from "react";
import style from "./alltodos.module.css"
export const AllTodo = (prop) => {
  console.log(prop) //{alltodos:[{},{},{}]}
  let {allTodos}=prop;
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
            <button>edit</button>
            <button>delete</button>
          </section>
        )
      })}
    </div>
  );
};
