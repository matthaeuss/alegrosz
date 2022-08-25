import { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";

function Logout(props) {
  const { setAuth } = useContext(AuthContext);

  function handleLogout() {
    setAuth({});
  }

  return (
    <button onClick={handleLogout} className="navigation__item">
      Logout
    </button>
  );
}

export default Logout;
