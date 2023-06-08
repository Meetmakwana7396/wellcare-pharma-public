import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL, toIndianCurrency } from "../../../baseurl";

const ProductCard = ({ data }) => {
  return (
    <div className="max-w-xs overflow-hidden group">
      <Link to={`/product-detail/${data.id}`}>
        <div className="max-h-sm mah-w-sm w-auto h-[250px] bg-black/10">
          <img
            className="w-full h-full object-cover rounded"
            src={IMG_URL + data?.medicin?.medicin_img_url}
            alt="product image"
          />
        </div>

        <div className="p-2 py-4 text-center">
          <div className="font-semiboly text-md mb-2 group-hover:text-primary">
            {data.medicin.medicin_name}
          </div>

          <p className="font-semibold text-sm">
            {toIndianCurrency(data.medicin.price.toString())}
          </p>
          <button className="p-2 border-2  border-secondary/50 text-secondary mt-2 hover:text-black">
            Show Details
          </button>
          {/* <p className="text-gray-700 text-base">$39</p> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
