import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../App.css";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="bg-prigmayBG">
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
