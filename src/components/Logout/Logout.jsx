import useLogout from "../../hooks/useLogout";

function Logout(props) {
  const logout = useLogout();

  return (
    <button onClick={logout} className="navigation__item" data-cy="logout">
      Logout
    </button>
  );
}

export default Logout;
