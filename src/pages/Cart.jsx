import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toIndianCurrency, URL } from "../../baseurl";
import CartProductCard from "../components/common/CartProductCard";
import Main from "../components/common/Main";

const defaultParams = {
  address: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  wellcare_commision: "10",
};

const Cart = () => {
  const { cart } = useSelector((state) => state.global);
  const { cart_count } = useSelector((state) => state.global);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  
  const [medicinArray, setMedicinArray] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(defaultParams);

  const subtotal = (add = 0) => {
    if (cart) {
      let totalPrice = 0;
      for (const item of cart) {
        const { quantity_unit } = item;
        const { price } = item.medical_shop_order.medicin;
        totalPrice += price * quantity_unit;
      }
      return toIndianCurrency((totalPrice + add).toString());
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function validateForm(formData) {
    const err = {};
    for (const [key, value] of Object.entries(formData)) {
      if (key === "pincode" && value && isNaN(value)) {
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

  const placeOrder = () => {
    if (user && validateForm(formData)) {
      axios({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        method: "post",
        url: `${URL}customers/order-medicin`,
        data: {
          medicin_array: medicinArray,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: "india",
          pincode: formData.pincode,
          wellcare_commision: 10,
        },
      })
        .then((response) => {
          setFormData(defaultParams);
          if (response.data.success) {
            navigate("/thank-you");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  useEffect(() => {
    if (cart) {
      const array = cart.map((c) => ({
        cart_id: c.cart_id,
        shop_medicin_id: c.shop_medicin_id,
        quantity_unit: c.quantity_unit,
      }));
      setMedicinArray(array);
    }
  }, [cart]);

  return (
    <Main>
      <p className="font-bold text-3xl mb-5">Cart</p>
      <div className="flex h-[70vh] gap-5">
        {/* Left side - Products */}
        {isCheckingOut ? (
          <div className="w-4/5 bg-primary/5 rounded overflow-y-auto">
            <div className="flex items-center mb-5 sticky top-0 bg-[#e7ecef] p-4 rounded">
              <span className="text-xl font-semibold ">Checkout</span>
            </div>
            <div className=" px-4 ">
              <div className="grid grid-cols-2 gap-8">
                <div className="">
                  <label htmlFor="address" className="block mb-1">
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address..."
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full form-control"
                  />
                  {errors?.address ? (
                    <span className="text-danger text-sm font-semibold">
                      {errors.address}
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
                <div className="">
                  <label htmlFor="country" className="block mb-1">
                    Country:
                  </label>
                  <input
                    type="country"
                    id="country"
                    name="country"
                    placeholder="Country..."
                    value={formData.country}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full form-control"
                  />
                  {errors?.country ? (
                    <span className="text-danger text-sm font-semibold">
                      {errors.country}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-span-2 flex justify-between">
                  <button
                    className="p-2 hover:text-black text-black/50 rounded border"
                    onClick={() => {
                      setIsCheckingOut(false);
                      // setFormData(defaultParams);
                      // setErrors({});
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="p-2 bg-primary/70 text-white hover:bg-primary rounded"
                    onClick={placeOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-4/5 bg-primary/5 rounded overflow-y-auto">
            <div className="flex items-center mb-5 sticky top-0 bg-[#e7ecef] p-4 rounded">
              <span className="text-xl font-semibold ">Products</span>
              <span className="ml-2 text-black/50">{`( ${cart_count} )`}</span>
            </div>
            <div className=" px-4 ">
              {cart?.length > 0 ? (
                <ul>
                  {cart?.map((product) => (
                    <div key={product.cart_id}>
                      <CartProductCard data={product} />
                    </div>
                  ))}
                </ul>
              ) : (
                <div className="text-center mt-[20%]">
                  <p>Your Cart is Empty.</p>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Right side - Billing */}
        {cart?.length > 0 ? (
          <div className="w-1/4 p-4 bg-secondary/20 rounded h-fit">
            <h1 className="text-xl font-semibold mb-4">Billing</h1>
            <table className="w-full">
              <thead className="border-b-2 border-black/20">
                <tr>
                  <th className="py-2 text-start">#</th>
                  <th className="py-2 text-start">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">
                    <span className="font-semibold text-sm whitespace-nowrap">
                      Subtotal:
                    </span>
                  </td>
                  <td className="py-2 whitespace-nowrap">{subtotal()}</td>
                </tr>
                <tr>
                  <td className="py-2">
                    <span className="font-semibold text-sm whitespace-nowrap">
                      Tax:
                    </span>
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    {toIndianCurrency("10")}
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <span className="font-semibold text-sm whitespace-nowrap">
                      Additional Charges:
                    </span>
                  </td>
                  <td className="py-2 whitespace-nowrap">
                    {toIndianCurrency("5")}
                  </td>
                </tr>

                <tr className="border-t-2 border-black/20 border-dashed">
                  <td className="py-4">
                    <span className="font-semibold text-md whitespace-nowrap">
                      Grand Total:
                    </span>
                  </td>
                  <td className="py-4 whitespace-nowrap">{subtotal(15)}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button
                      className={`bg-black/80 p-2 text-white rounded w-full ${
                        isCheckingOut && "pointer-events-none opacity-50"
                      }`}
                      onClick={() => setIsCheckingOut(true)}
                    >
                      Procced to Checkout
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </Main>
  );
};

export default Cart;
