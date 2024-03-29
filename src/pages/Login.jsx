import React, { useState } from "react";
import { URL } from "../../baseurl";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import { toast } from "react-hot-toast";

const defaultParams = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(defaultParams);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      axios({
        method: "post",
        url: `${URL}api/user-login`,
        data: {
          ...formData,
        },
      })
        .then((response) => {
          setFormData(defaultParams);
          localStorage.setItem("user_token", response.data.token);
          navigate("/");
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.response.data.message);
        });
    }
  };

  const validateForm = () => {
    const err = {};
    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        err[key] = "This field is required.";
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <div className="main-wrapper">
      <div className="mx-auto my-auto">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] mx-auto border border-black/20 shadow-lg rounded my-auto p-4"
        >
          <div className=" flex justify-center mb-10">
            <span className="font-semibold text-3xl">Login</span>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email..."
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.email ? (
              <span className="text-danger text-sm font-semibold">
                {errors.email}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password..."
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            <div className="flex justify-between text-sm pt-1">
              {errors.password ? (
                <span className="text-danger text-md font-semibold">
                  {errors.password}
                </span>
              ) : (
                ""
              )}
              <span
                className={`cursor-pointer ${
                  showPassword ? "" : "text-primary"
                } font-semibold`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "hide" : "show"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-success/80 w-full hover:bg-success font-semibold text-white px-4 py-2 rounded"
          >
            {isLoading ? <Loader /> : "Login"}
          </button>
          <button
            type="button"
            className="w-full font-semibold hover:underline text-black/50 hover:text-black px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Continue as Guest
          </button>
        </form>
        <p className="text-sm text-center mt-5">
          Don't have any Account?{" "}
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
