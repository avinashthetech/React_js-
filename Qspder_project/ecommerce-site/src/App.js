import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Search from "./components/Search";
import { Provider } from "react-redux";
import store from "./redux/store";
import './APP.css';  // Import the CSS


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header className="app-header">
            <h1>My E-commerce Website</h1>
            <Search /> {/* A search bar component to search products */}
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} /> {/* Show all products */}
              <Route path="/cart" element={<Cart />} /> {/* Show cart */}
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
