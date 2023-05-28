import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({color}) => {
  return (
    <ThreeDots
      height="20"
      width="50"
      radius="9"
      color={color || "#ffffff"}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: "flex", justifyContent: "center"  }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
