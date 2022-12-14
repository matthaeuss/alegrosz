import { useFormik } from "formik";
import { useContext } from "react";
import "./Login.scss";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = "/login";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(LOGIN_URL, JSON.stringify(values));

        const accessToken = response?.data?.accessToken;

        setAuth({ accessToken });
        navigate(from, { replace: true });
      } catch (error) {
        if (!error?.response) {
          console.log("No server response");
        } else if (error.response?.status === 400) {
          console.log("Missing user name or password");
        } else if (error.response?.status === 401) {
          console.log("Unauthorized");
        } else {
          console.log("Login failed");
        }
      }
    },
  });

  return (
    <form className="login" onSubmit={formik.handleSubmit}>
      <div className="login__box">
        <label className="login_lbl" htmlFor="email">
          Email Address:
        </label>
        <input
          data-cy="email"
          className="login__input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="login__box">
        <label className="login__lbl" htmlFor="password">
          Password:
        </label>
        <input
          data-cy="password"
          className="login__input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="login__box login__box--inline">
        <input
          data-cy="remember"
          className="login__input"
          id="remember"
          name="remember"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.remember}
        />
        <label className="login__lbl" htmlFor="remember">
          Remember me
        </label>
      </div>

      <button data-cy="submit" type="submit" id="btnLogin">
        Login
      </button>
    </form>
  );
}

export default Login;
