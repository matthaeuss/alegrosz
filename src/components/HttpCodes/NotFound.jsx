import { Link, Outlet } from "react-router-dom";

function NotFound(props) {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFound;
