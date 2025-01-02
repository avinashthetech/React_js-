import React, { useReducer } from "react";

let initialState = 0;
function reducerFunc(state, action) {
  console.log(state, action);

  // eslint-disable-next-line default-case
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
}

export const Reducer = () => {
  let [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1> Learn useReducer</h1>

      <h2>Count {state}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}> decrement</button>
      <button onClick={() => dispatch("reset")}> reset</button>
    </div>
  );
};
