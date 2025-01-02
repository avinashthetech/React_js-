import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* Link components are used for navigating between pages */}
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contact</Link>
        
        {/* You could also use traditional anchor tags instead of Link components */}
        {/* <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contacts">Contact</a> */}
      </nav>
    </div>
  );
};

export default Navbar;
