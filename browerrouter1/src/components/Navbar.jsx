import { Link } from "react-router-dom"

// import {style} from './navbar.module.css'
const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contects"> contects</Link>
      <Link to="/Services">Services</Link>

      {/* <a href="/"> Home</a>
        <a href="/About">About</a>
        <a href="/Contects"> contects</a>
        <a href="/Services">Services</a> */}
    </nav>
  );
};

export default Navbar;
