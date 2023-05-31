import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/common/Main";

const ThankyouPage = () => {
  return (
    <Main>
      <div className="h-[50vh] flex justify-center items-center">
        <div className="text-center">
          <p className="text-2xl max-w-2xl ">
            Order placed! We'll keep you informed on the status. Thank you for
            choosing us!
          </p>
          <div className="flex gap-4 mt-5 justify-center">
            <Link className="p-2 bg-success rounded text-white hover:bg-black/80" to="/">Continue Shopping</Link>
            <Link className="p-2 border border-success rounded text-success hover:bg-success hover:text-white" to="/myorders">My Orders</Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ThankyouPage;
