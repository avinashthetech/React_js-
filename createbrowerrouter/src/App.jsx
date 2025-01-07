import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

//  Why
const Home=lazy(()=>import("./pages/Home"))
const Services=lazy(()=>import("./pages/Services"))
const About=lazy(()=>import("./pages/About"))
const Contects=lazy(()=>import("./pages/Contects"))
const Layout=lazy(()=>import("./pages/Layout"))


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
