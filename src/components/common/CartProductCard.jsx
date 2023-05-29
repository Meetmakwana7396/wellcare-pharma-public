import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toIndianCurrency, URL } from "../../../baseurl";
import { getCartList } from "../../store/slices/GlobalSlice";

const CartProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const updateQuantity = (id, qty) => {
    axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      method: "put",
      url: `${URL}customers/update-cart`,
      data: {
        new_quantity: qty,
        cart_id: id,
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(getCartList());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <li className="p-4 border-b-4 border-black/10  flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={`./../../../../Well_Care_Pharmacy/public/pictures/${data.medical_shop_order.medicin.medicin_img_url}`}
          //   alt={name}
          className="w-12 h-12 rounded border mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {data.medical_shop_order.medicin.medicin_name}
          </h3>
          <p className="text-gray-500">
            {toIndianCurrency(data.medical_shop_order.medicin.price.toString())}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <BiMinusCircle
          className="cursor-pointer text-danger"
          onClick={() =>
            updateQuantity(data.cart_id, parseInt(data.quantity_unit) - 1)
          }
        />

        <span className="w-16 px-2 py-1 text-center">
          {" "}
          {data.quantity_unit}
        </span>
        <BiPlusCircle
          className="cursor-pointer text-primary"
          onClick={() =>
            updateQuantity(data.cart_id, parseInt(data.quantity_unit) + 1)
          }
        />
      </div>
    </li>
  );
};

export default CartProductCard;
