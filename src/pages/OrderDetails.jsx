import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/common/Main";
import OrderDetailBlock from "../components/product/OrderDetailBlock";

const OrderDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id])
  
  return (
    <Main>
      <OrderDetailBlock />
    </Main>
  );
};

export default OrderDetails;
