/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => registerUser(data, history);

  return (
    <>
      <div className="register">
        <form
          className="register__form"
          // login__form
          onClick={handleSubmit(submitHandler)}
        >
          <label>
            <span className="register__form__title">Name</span>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "You most enter name",
                },
              })}
              className={`${errors.name ? "ring-2 ring-red-500" : null}`}
              placeholder="Full name"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.name?.message}
            </span>
          </label>
          <label>
            <span className="register__form__title">Email</span>
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
              className={`${errors.email ? "ring-2 ring-red-500" : null}`}
              placeholder="Email"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.email?.message}
            </span>
          </label>
          <label>
            <span className="register__form__title">Password</span>
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
              className={`${errors.password ? "ring-2 ring-red-500" : null}`}
              placeholder="Password"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.password?.message}
            </span>
          </label>
          <label>
            <span className="register__form__title">Conform Password</span>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "You most enter confirm Password",
                },
                minLength: {
                  value: 6,
                  message: "confirm Password lenth is more then 5",
                },
              })}
              className={` ${
                errors.confirmPassword ? "ring-2 ring-red-500" : null
              }`}
              placeholder="Confirm Password"
            />
            <span className="py-2 text-sm text-red-400">
              {errors?.confirmPassword?.message}
            </span>
          </label>

          <span className="w-full">
            <input
              type="submit"
              className="w-full text-white rounded bg-blue-600"
              value="Create an Account"
            />
          </span>
        </form>
        <p className="text-center d-block">
          Don't have an account?{" "}
          <Link to="/login">
            <a className="border-b border-blue-600 text-blue-600">Log in now</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
