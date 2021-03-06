/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import Header from "../../common/Header";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, loginUser } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const destination = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.replace(destination);
    });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => loginUser(data, location, history);

  return (
    <>
      <Header />
      <div className="login">
        <div className="login__wrapper">
          <form className="login__form" onSubmit={handleSubmit(submitHandler)}>
            <label>
              <span className="login__form__title">Email</span>
              <input
                type="email"
                name="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You most enter email address",
                  },
                  minLength: {
                    value: 8,
                    message: "This is not long enough to be an email",
                  },
                  maxLength: {
                    value: 120,
                    message: "This is too long",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "invalid email address",
                  },
                })}
                className={`
             ${errors.email ? "ring-2 ring-red-500" : null}`}
                placeholder="Email"
              />
              <span className="py-2 text-sm text-red-400">
                {errors?.email?.message}
              </span>
            </label>
            <label>
              <span className="login__form__title">Password</span>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "You most enter password",
                  },
                  minLength: {
                    value: 6,
                    message: "Password lenth is more then 5",
                  },
                })}
                className={`
                 ${errors.password ? "ring-2 ring-red-500" : null}`}
                placeholder="password"
              />
              <span className="py-2 text-sm text-red-400">
                {errors?.password?.message}
              </span>
            </label>
            <div className="tracking-wide text-gray-900">
              <Link to="#">
                <a className="border-b border-blue-600 text-blue-600">
                  Forgot Password?
                </a>
              </Link>
            </div>
            <span className="w-full">
              <input
                type="submit"
                className="btn-brand text-white rounded bg-blue-600 mt-5"
                value="LogIn Now"
              />
            </span>
          </form>
          <p className="text-center d-block">
            Don't have an account?{" "}
            <Link to="/register">
              <a className="border-b border-blue-600 text-blue-600">
                Create an account
              </a>
            </Link>
          </p>
        </div>
        <div className="login__google-btn">
          <h5>OR</h5>
          <button
            onClick={handleGoogleLogin}
            className="mt-3 px-8 py-3 bg-yellow-500 hover:bg-blue-500 font-bold rounded"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
