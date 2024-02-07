import React from "react";
import SideNav from "./SideNav";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const SellerMain = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <SideNav />
        <div className="w-full">
          {/* <Profile /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SellerMain;
