import React, { useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { AllTodo } from "./AllTodo";

export const TodoWrapper = () => {
  let [todo, setTodo] = useState("");
  let [allTodos, setAllTodos] = useState([{ text: "hello word", id: 1 }]);
  // let [editTodos,setEditTodos]=useState(null);

  // let handleDeleteTodo = (id) => {
  //   setTodo(todo.filter((todo) => todo.id !== id));
  // };

  let handleDeleteTodo = (id) => {
    let userFiler = allTodos.filter((e) => {
      console.log("Jai mata di")
      console.log(e);
      return e.id !== id;
    })
    setAllTodos(userFiler);
  };


  let handleEditTodo=(id )=>{

    let editodo=allTodos.find((e)=>{
      return e.id ===id;
    })
    setAllTodos(editodo);
    // setAllTodos(allTodos.find((e)=>e.id === id ))
  }



  // let handleEditTodo = (id, newText) => {
  //   setAllTodos(
  //     allTodos.map((e) =>
  //       e.id === id ? { ...e, text: newText } : e  // If ID matches, update the text
  //     )
  //   );
  // };
  
  



  let handletodo = (e) => {
    setTodo(e.target.value);
  };
  let createTodo = (e) => {
    e.preventDefault();
    console.log({ todo });

    if (todo.trim() !== "") {
      let newTodo = {
        text: todo,
        id: Date.now(),
      };
      console.log(newTodo);
      setAllTodos([...allTodos, newTodo]);
      setTodo("");
    } else {
      alert("empty todo");
    }
  };
  console.log(allTodos);
  return (
    <div>
      {/* <h1>Todo Wrapper</h1> */}
      <CreateTodo
        props_todo={todo}
        props_handletodo={handletodo}
        props_createTodo={createTodo}
      />
      <AllTodo allTodos={allTodos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </div>
  );
};
