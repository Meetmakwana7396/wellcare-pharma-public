import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  auth_code,
  formatDate,
  IMG_URL,
  toIndianCurrency,
  URL,
} from "../../../baseurl";
import { getCartList } from "../../store/slices/GlobalSlice";

const ProductDetailCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = (id) => {
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      url: `${URL}customers/add-to-cart`,
      data: {
        shop_medicin_id: id,
        quantity: 1,
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(getCartList());
      })
      .catch((error) => {
        toast.error("Please Login First");
      });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden ">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-96 h-64 mt-8 object-cover object-center rounded"
            src={IMG_URL + data?.medicin?.medicin_img_url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {data?.medicin.pharma_company.company_name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data?.medicin.medicin_name}
            </h1>
            <div className="grid grid-cols-2 py-4 gap-4">
              <div>
                Category :
                <span className="italic text-sm text-black/60 ml-1">
                  {data?.medicin.category.category_name}
                </span>
              </div>

              <div>
                For Disease :
                <span className="italic text-sm text-black/60 ml-1">
                  {data?.medicin.disease.disease_name}
                </span>
              </div>
              {data?.medicin.expire_date && (
                <div className="whitespace-nowrap">
                  Expire Date :
                  <span className="italic text-sm  text-black/60 ml-1">
                    {formatDate(data?.medicin.expire_date)}
                  </span>
                </div>
              )}
            </div>
            <p className="text-black/50 mt-7 mb-3">Product Details: </p>
            <p className="leading-relaxed">
              {data?.medicin.medicin_description}
            </p>
            <div className="mt-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                {data?.medicin.price &&
                  toIndianCurrency(data?.medicin.price.toString())}
              </span>
            </div>

            <div className="mt-4 py-4">
              <button
                className="text-white bg-success border-0 p-2 w-full focus:outline-none hover:bg-success rounded"
                onClick={() => {
                  if (localStorage.getItem("user_token")) {
                    addToCart(data.id);
                    navigate("/cart");
                  } else {
                    toast.error("Please Login First");
                  }
                }}
              >
                Buy Now
              </button>
              <br />
              <button
                className=" my-2 text-success border-success border-2 p-2 w-full  rounded"
                onClick={() => addToCart(data.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
