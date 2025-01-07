
import { Link } from "react-router-dom"
import style from "./navbar.module.css"
const Navbar = () => {
  return (
    <nav id={style.nav}>
        <figure>
            <img src="/public/hive-removebg-preview.png" alt="alt" />
        </figure>
        <ul>
            <li> <Link to="/">home</Link></li>
            <li className="primary-btn"><Link to="/Login">login</Link></li>
            <li className="secondary-btn"><Link to="/Signup">signup</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar