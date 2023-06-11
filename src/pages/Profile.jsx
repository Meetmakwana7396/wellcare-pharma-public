import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiPencil, BiPlusCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMG_URL, URL as url } from "../../baseurl";
import Loader from "../components/common/Loader";
import Main from "../components/common/Main";
import { getProfileDetails } from "../store/slices/UserSlice";

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

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
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
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    setIsLoading(true);
    axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      method: "post",
      url: `${url}customers/update-profile`,
      data: data,
    })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(getProfileDetails());
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setIsLoading(false);

  };

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        user_name: user.user_name,
        email: user.email,
        contact_no: user.contact_no,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
      });
      setPicture(IMG_URL + user.profile_pic);
    }
  }, [user]);

  return (
    <Main>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] mx-auto  rounded my-auto p-4"
        >
          <div className="relative z-0 w-full my-4">
            <div className="flex gap-4 items-center justify-center">
              {picture ? (
                <label
                  htmlFor="store_image"
                  className="w-fit relative cursor-pointer group"
                >
                  <img
                    src={picture}
                    alt=""
                    className="w-32 h-32 z-0 rounded-full object-cover cursor-pointer"
                  />
                  <span className="bg-black/50 hidden group-hover:block rounded-full absolute top-0 w-full h-full">
                    <BiPencil className="text-white mx-auto w-5 h-5 mt-[40%]" />
                  </span>
                </label>
              ) : (
                <label
                  htmlFor="store_image"
                  className="h-32 w-32 mt-1 rounded-full border-black/10 border flex justify-center items-center cursor-pointer shadow-md"
                >
                  <BiPlusCircle className="text-black/40" />
                </label>
              )}
              <input
                type="file"
                name="picture"
                id="store_image"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
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
              <label htmlFor="contact_no" className="block mb-1">
                Contact No:
              </label>
              <input
                type="text"
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
                type="text"
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
                type="text"
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

          <button
            type="submit"
            className="bg-success/80 mt-5 w-full hover:bg-success font-semibold text-white px-4 py-2 rounded"
          >
            {isLoading ? <Loader /> : "Submit"}
          </button>
        </form>
      </div>
    </Main>
  );
};

export default Profile;
