import { createStore } from "redux";
import cartReducer from "./reducers"; // Import the default cartReducer

const store = createStore(cartReducer); // Create the store using the reducer

export default store;
