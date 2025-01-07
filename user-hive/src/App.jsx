import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./router/router";

const App = () => {
  return (
    <RouterProvider router={myRoutes} />
    // <div>
    //     {/* <h1>App</h1>
    //     <button className="primary-btn">Click</button>
    //     <button className="secondary-btn">Click</button> */}
    // </div>
  );
};

export default App;
