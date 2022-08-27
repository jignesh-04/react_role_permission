import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import Navbar from "../Aside/Navbar";
import "../Css/Dashbord.css";
import Postservice from "../Service/Postservice";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Dashbord = () => {

  return (
    <>
      <div className="main_dashbord">
        <Aside />
        <div className="dashbord">
          <Navbar />
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
