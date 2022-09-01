import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import "./Register.scss";
import { handleDataFromAPI } from "../../helpers/api";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }

  return errors;
};

function Register() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      delete values.repeatPassword;
      handleDataFromAPI({
        endpoint: "users",
        method: "post",
        body: values,
      }).then((data) => {
        navigate("/login", { replace: true });
      });
    },
  });

  return (
    <form className="register" onSubmit={formik.handleSubmit} noValidate>
      <div className="register__box box">
        <label className="box__lbl" htmlFor="email">
          Email:
        </label>
        <input
          data-cy="email"
          className="box__input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="required">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="register__box box">
        <label className="box__lbl" htmlFor="password">
          Password:
        </label>
        <input
          data-cy="password"
          className="box__input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="required">{formik.errors.password}</div>
        ) : null}
      </div>
      <div className="register__box box">
        <label className="box__lbl" htmlFor="password">
          Repeat Password:
        </label>
        <input
          data-cy="repeatPassword"
          className="box__input"
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        {formik.errors.password ? (
          <div className="required">{formik.errors.repeatPassword}</div>
        ) : null}
      </div>

      <button data-cy="submit" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
