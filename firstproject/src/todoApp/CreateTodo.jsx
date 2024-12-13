import React from "react";
import style from "./createTodo.module.css"; 



 export const CreateTodo = (prop) => {
    //  console.log(prop) //{todo:""}
     let { props_todo ,props_handletodo,props_createTodo}=prop;
  return (
    <div id={style.CreateTodo}>
        <form onSubmit={props_createTodo}>
        <h2>Create Todo</h2>
        <input type="text" placeholder="todo...." value={props_todo} onChange={props_handletodo} />
        <button>created</button>

        </form>
    </div>
  );
};
