import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import  { Toaster } from 'react-hot-toast';



const Layout1 = () => {
  return (
    <div>
      <Navbar />
      <Toaster/>
      <Outlet/>

    
    </div>
  );
};

export default Layout1;
