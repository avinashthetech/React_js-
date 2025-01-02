import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./pages/Services";
import Contects from "./pages/Contects";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
const App = () => {
  let myRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          //path: "/",
          index: true,
          element: <Home />,
        },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contects", element: <Contects /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default App;
