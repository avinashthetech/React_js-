import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";

import Layout1 from "../pages/Layout1.jsx";
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx'

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        //path: "/",
        index: true,
        element: <Home />,
      },
      { path: "/Login", element:  <Login/>},
      { path: "/Signup", element: <Signup /> },
    ],
  },
]);
