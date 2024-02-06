import React from "react";
import SideNav from "./SideNav";
import Profile from "./Profile";

const SellerMain = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <SideNav />
        <div className="ml-6 mt-6 w-auto">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default SellerMain;
