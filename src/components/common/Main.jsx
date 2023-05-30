import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = ({ children }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-[#f2f2f2] overflow-auto pb-20">
        <div className="max-w-7xl mx-auto py-10">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
