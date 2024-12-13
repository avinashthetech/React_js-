import React, { useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { AllTodo } from "./AllTodo";

export const TodoWrapper = () => {
    let [todo,setTodo]=useState("");
    let [allTodos,setAllTodos]=useState([{text:"hello word",id:1}]);
    let handletodo = (e) => {
        setTodo(e.target.value);
    }
    let createTodo =(e)=>{
        e.preventDefault();
        console.log({todo});

        if(todo.trim() !==""){
          let newTodo={
            text:todo,
            id:Date.now()
        };
        console.log(newTodo)
        setAllTodos([...allTodos,newTodo]);
        setTodo("")
        }else {
          alert("empty todo")
        }

    };
    console.log(allTodos);
  return (
    <div>
      {/* <h1>Todo Wrapper</h1> */}
      <CreateTodo props_todo={todo} props_handletodo={handletodo} props_createTodo={createTodo}/>
      <AllTodo  allTodos={allTodos} />
    </div>
  );
};
