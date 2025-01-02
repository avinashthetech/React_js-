
import { Outlet } from 'react-router-dom';
import Navbar from './../componests/Navbar';

const Layout = () => {
  return (
    <div>

        <Navbar/>
        <Outlet/>
 {/* render the children componests */}
    </div>
  )
}

export default Layout