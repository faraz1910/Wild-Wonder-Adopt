import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="h-screen w-64  p-5">
        <div className="">
          <p className="font-bold">Admin</p>
          <h4 className="text-3xl font-bold -mt-2 text-green-600">Dashboard</h4>
        </div>
        <div className="mt-8">
          <ul>
            <NavLink to="profile">
              <li className="text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold">
                Profile
              </li>
            </NavLink>
            <NavLink to="menu">
              <li className="text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold">
                Price List
              </li>
            </NavLink>
            <NavLink to="orders">
              <li className="text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold">
                History
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
