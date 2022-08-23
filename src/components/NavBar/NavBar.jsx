import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar(props) {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__item">
        Home
      </Link>
      <div>
        <Link to="/login" className="navigation__item">
          Login
        </Link>
        <Link to="/register" className="navigation__item">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;