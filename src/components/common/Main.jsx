import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Main = ({ children }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-[#f2f2f2] h-screen overflow-auto">
        <div className="max-w-7xl mx-auto py-10">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Main;
