import React, { useState } from "react";
import { URL as url } from "../../baseurl";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import { toast } from "react-hot-toast";
import { BiPlusCircle } from "react-icons/bi";

const defaultParams = {
  user_name: "",
  email: "",
  password: "",
  contact_no: "",
  city: "",
  state: "",
  pincode: "",
  picture: null,
};

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(defaultParams);
  const [picture, setPicture] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setFormData({ ...formData, picture: file });
    setPicture(URL.createObjectURL(file));
  };

  function validateForm(formData) {
    const err = {};
    for (const [key, value] of Object.entries(formData)) {
      if (
        (key === "contact_no" || key === "pincode") &&
        value &&
        isNaN(value)
      ) {
        err[key] = `${key} cannot be string.`;
      } else if (value === "") {
        err[key] = "This field is required.";
      }
    }
    if (Object.keys(err).length === 0) {
      return true;
    } else {
      console.log(err, "errors");
      setErrors(err);
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      setIsLoading(true);
      axios({
        method: "post",
        url: `${url}api/user-register`,
        data: data,
      })
        .then((response) => {
          setFormData(defaultParams);
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <div className="main-wrapper">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] mx-auto border border-black/20 shadow-lg rounded my-auto p-4"
      >
        <div className=" flex justify-center mb-10">
          <span className="font-semibold text-3xl">Signup</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="user_name" className="block mb-1">
              Username:
            </label>
            <input
              type="text"
              id="user_name"
              placeholder="Username..."
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.user_name ? (
              <span className="text-danger text-sm font-semibold">
                {errors.user_name}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
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
          <div className="">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.password ? (
              <span className="text-danger text-sm font-semibold">
                {errors.password}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="contact_no" className="block mb-1">
              Contact No:
            </label>
            <input
              type="contact_no"
              id="contact_no"
              name="contact_no"
              placeholder="Contact No..."
              value={formData.contact_no}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.contact_no ? (
              <span className="text-danger text-sm font-semibold">
                {errors.contact_no}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="city" className="block mb-1">
              City:
            </label>
            <input
              type="city"
              id="city"
              name="city"
              placeholder="City..."
              value={formData.city}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.city ? (
              <span className="text-danger text-sm font-semibold">
                {errors.city}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="state" className="block mb-1">
              State:
            </label>
            <input
              type="state"
              id="state"
              name="state"
              placeholder="State..."
              value={formData.state}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.state ? (
              <span className="text-danger text-sm font-semibold">
                {errors.state}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="pincode" className="block mb-1">
              Pincode:
            </label>
            <input
              type="pincode"
              id="pincode"
              name="pincode"
              placeholder="Pincode..."
              value={formData.pincode}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full form-control"
            />
            {errors?.pincode ? (
              <span className="text-danger text-sm font-semibold">
                {errors.pincode}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <div className="mt-4">
          <label htmlFor="picture" className="block mb-1">
            Picture:
          </label>
          <input
            type="picture"
            id="picture"
            name="picture"
            placeholder="Picture..."
            value={formData.picture}
            // onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full form-control"
          />
          {errors?.picture ? (
            <span className="text-danger text-sm font-semibold">
              {errors.picture}
            </span>
          ) : (
            ""
          )}
        </div> */}
        <div className="relative z-0 w-full my-4">
          <label htmlFor="">Profile Picture</label>
          <div className="flex gap-4 items-center">
            <label
              htmlFor="store_image"
              className="h-20 w-20 mt-1 rounded border-black/10 border flex justify-center items-center cursor-pointer shadow-md"
            >
              <BiPlusCircle className="text-black/40" />
            </label>
            <input
              type="file"
              name="picture"
              id="store_image"
              className="hidden"
              onChange={handleImageChange}
            />

            {picture && (
              <img
                src={picture}
                alt=""
                className="h-20 w-20 object-cover mt-1 rounded border-black/10 border flex justify-center items-center cursor-pointer shadow-md"
                srcset=""
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-success/80 mt-5 w-full hover:bg-success font-semibold text-white px-4 py-2 rounded"
        >
          {isLoading ? <Loader /> : "Signup"}
        </button>
        <div className="mt-3 text-center">
          <Link
            type="button"
            className="w-fit font-semibold hover:underline text-black/50 hover:text-black"
            to="/"
          >
            Continue as Guest
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
