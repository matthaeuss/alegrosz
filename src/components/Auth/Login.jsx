import { Formik } from "formik";
import { useFormik } from "formik";
import "./Login.scss";

function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="login" onSubmit={formik.handleSubmit}>
      <div className="login__box">
        <label className="login_lbl" htmlFor="email">
          Email Address:
        </label>
        <input
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

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;