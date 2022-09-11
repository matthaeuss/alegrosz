import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Unauthorized(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h2>You need to have more money to see this page!</h2>
      <Link to={"/login"}>Login!</Link>
    </div>
  );
}

export default Unauthorized;
