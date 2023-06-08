import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL, toIndianCurrency } from "../../../baseurl";

const OrderProductCard = ({ data }) => {
  return (
    <li className="p-4 border-b-4 border-black/10  flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={IMG_URL + data?.medical_shop_order?.medicin?.medicin_img_url}
          className="w-12 object-cover h-12 rounded border mr-4"
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
        <span className="w-auto px-2 py-1 text-center">
          <p> Quantity: {data.quantity_unit}</p>
        </span>
        <Link
          className="text-primary underline"
          to={`/myorders/order-details/${data.id}`}
        >
          Show Details
        </Link>
      </div>
    </li>
  );
};

export default OrderProductCard;
