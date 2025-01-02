import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>

        </li>
        <li>
          {/* <a href="/services"> Services</a> */}
          <Link to="/services"> Services</Link>

        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>

        </li>
        <li>
          {/* <a href="/contects"> Contects</a> */}
          <Link to="/contects"> Contects</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
