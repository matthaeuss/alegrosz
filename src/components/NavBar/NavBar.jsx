import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logout from "../Logout/Logout";
import { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";

function NavBar(props) {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="navigation">
      <Link to="/" className="navigation__item">
        Home
      </Link>
      <div>
        {!Object.keys(auth).length ? (
          <>
            <Link to="/login" className="navigation__item">
              Login
            </Link>
            <Link to="/register" className="navigation__item">
              Register
            </Link>
          </>
        ) : (
          <Logout />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
