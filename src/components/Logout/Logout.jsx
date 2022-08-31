import useLogout from "../../hooks/useLogout";

function Logout(props) {
  const logout = useLogout();

  return (
    <button onClick={logout} className="navigation__item">
      Logout
    </button>
  );
}

export default Logout;
