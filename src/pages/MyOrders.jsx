import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL } from "../../baseurl";
import Main from "../components/common/Main";
import OrderProductCard from "../components/product/OrderProductCard";

const MyOrders = () => {
  const [orderList, setOrderList] = useState([]);

  const getOrdersList = () => {
    axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      url: `${URL}customers/list-orders`,
      method: "get",
    })
      .then((response) => {
        console.log(response.data);
        setOrderList(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getOrdersList();
  }, []);

  return (
    <Main>
      <div className=" p-4 bg-secondary/10 rounded h-[70vh] overflow-auto">
        <h2 className=" mb-5 text-xl font-semibold">My Orders</h2>
        {orderList?.length > 0 ? (
          <ul>
            {orderList?.map((product) => (
              <div key={product.cart_id}>
                <OrderProductCard data={product} />
              </div>
            ))}
          </ul>
        ) : (
          <div className="text-center mt-[20%]">
            <p>No data found.</p>
          </div>
        )}
      </div>
    </Main>
  );
};

export default MyOrders;
