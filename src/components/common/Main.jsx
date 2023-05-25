import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Main = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <Navbar />
      {children}
    </div>
  );
};

export default Main;
