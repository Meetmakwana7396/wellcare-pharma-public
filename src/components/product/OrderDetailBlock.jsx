import React from "react";
import { Link } from "react-router-dom";

const OrderDetailBlock = ({ data }) => {
  return (
    <div className="p-4 border-2 rounded bg-white border-secondary/50 h-80">
      <div className="grid grid-cols-4 border">
        <div className="w-full">
          <img src="sas" alt="no image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailBlock;
