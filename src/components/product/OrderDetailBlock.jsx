import React from "react";
import { Link } from "react-router-dom";
import { formatDate, getOrderStatus, toIndianCurrency } from "../../../baseurl";

const OrderDetailBlock = ({ data }) => {
  return (
    <div className="p-4 border-2 rounded bg-white border-secondary/50 h-80">
      <div className="grid grid-cols-4 gap-8  h-full">
        <div className="border border-secondary/30">
          <img src="sas" alt="no image" className="w-full h-full " />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4 underline text-secondary">
            Order Details
          </h3>
          <div className="grid grid-cols-1 gap-5">
            <p>
              Order ID :<span className="ml-2 text-secondary">{data?.id}</span>
            </p>
            <p className="truncate">
              Quantity :
              <span className="ml-2 text-secondary">{data?.quantity_unit}</span>
            </p>
            {data?.total_price && (
              <p className="">
                Total Payment :
                <span className="ml-2 text-secondary">
                  {toIndianCurrency(data?.total_price.toString())}
                </span>
              </p>
            )}
            <p className="">
              Order Status :
              <span
                className={`status ml-2 ${getOrderStatus(data?.order_tracing)}`}
              >
                {getOrderStatus(data?.order_tracing)}
              </span>
            </p>
            <p className="">
              Delivery Address :
              <span className="ml-2 text-secondary">{`${data?.address}, ${data?.area}, ${data?.city}, ${data?.state}, ${data?.pincode}, ${data?.country}`}</span>
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold mb-4 underline text-secondary">
            Medicin Details
          </h3>
          <div className="grid grid-cols-1 gap-5">
            <p>
              Medicin ID :
              <span className="ml-2 text-secondary">
                {data?.medical_shop_order?.medicin.id}
              </span>
            </p>
            <p className="truncate">
              Name :
              <span className="ml-2 text-secondary">
                {data?.medical_shop_order?.medicin?.medicin_name}
              </span>
            </p>
            {data?.medical_shop_order?.medicin.price && (
              <p className="">
                Price :
                <span className="ml-2 text-secondary">
                  {toIndianCurrency(
                    data?.medical_shop_order?.medicin.price.toString()
                  )}
                </span>
              </p>
            )}
            <p className="">
              Expire Date :
              <span className="ml-2 text-secondary">
                {formatDate(data?.medical_shop_order?.medicin.expire_date)}
              </span>
            </p>
            <p className="">
              Category :
              <span className="ml-2 text-secondary">
                {data?.medical_shop_order?.medicin?.category?.category_name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailBlock;
