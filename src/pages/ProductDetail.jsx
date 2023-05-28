import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../../baseurl";
import Loader from "../components/common/Loader";
import Main from "../components/common/Main";
import ProductDetailCard from "../components/common/ProductDetailCard";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { id } = params;

  const getProductDetails = () => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `${URL}medicins/get-medicin-detail?shop_medicin_id=${id}`,
    })
      .then((response) => {
        setIsLoading(false);
        setProductDetails(response.data.data);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <Main>
      {isLoading ? (
        <Loader color="#000000" />
      ) : (
        <ProductDetailCard data={productDetails} />
      )}
    </Main>
  );
};

export default ProductDetail;
