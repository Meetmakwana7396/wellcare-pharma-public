import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../../baseurl";
import Main from "../components/common/Main";
import OrderDetailBlock from "../components/product/OrderDetailBlock";

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [OrderDetails, setOrderDetails] = useState(null);

  const getOrderDetails = (id) => {
    axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      url: `${URL}customers/get-order-details?order_id=${id}`,
      method: "get",
    })
      .then((response) => {
        console.log(response.data);
        setOrderDetails(response.data.data);
      })
      .catch((error) => {
        navigate("*");
        console.log(error.response);
      });
  };
  useEffect(() => {
    if (id) {
      getOrderDetails(id);
    }
  }, [id]);

  return (
    <Main>
      {OrderDetails ? (
        <OrderDetailBlock data={OrderDetails} />
      ) : (
        "No data found."
      )}
    </Main>
  );
};

export default OrderDetails;
