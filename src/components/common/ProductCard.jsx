import React from "react";
import { Link } from "react-router-dom";
import { toIndianCurrency } from "../../../baseurl";

const ProductCard = ({ data }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Link to={`/product-detail/${data.medicin_id}`}>
        {/* <img className="w-full" src={imageUrl} alt={name} /> */}
        <div className="h-36 bg-black/10">
          <img className="w-full" src="" alt="product image" />
        </div>

        <div className="p-2 py-4">
          <div className="font-semiboly text-md mb-2">
            {data.medicin.medicin_name}
          </div>

          <p className="text-base mt-5">
            {toIndianCurrency(data.medicin.price.toString())}
          </p>
          {/* <p className="text-gray-700 text-base">$39</p> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
