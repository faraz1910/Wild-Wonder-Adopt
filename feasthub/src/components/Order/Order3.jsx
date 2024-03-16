import { useState, useEffect } from "react";
import { db } from "../../firebaseSeller";
import { collection, getDocs } from "firebase/firestore";
import MenuTable from "./MenuTable";
import MealPlans from "./MealPlans";
import { RiArrowDropDownLine } from "react-icons/ri";

const Order3 = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 justify-between md:flex-row md p-8">
        <div className="w-full h-full md:w-auto">
          <img
            src="/src/assets/orderImg.jpg"
            alt="Seller"
            className="w-full h-full object-cover md:h-[30rem] "
          />
        </div>
        <div className="flex flex-col mt-4 mx-2 md:ml-10 ">
          <div className="flex flex-col">
            <div className="font-semibold ">
              <h1 className="text-3xl font-bold mb-2">FeastHUB Tiffin</h1>
            </div>
            <p className="mb-1">Ashta, Bus Stand, Madhya Pradesh - 466011</p>
            <p>+91 9854612367</p>
            <hr className="my-4" />
            <p>
              This is description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem, aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minima, rem?
            </p>
            <div className="mt-4">
              <span className="px-2 py-1 bg-green-300 text-sm rounded mr-2 bg-opacity-50 text-green-800 font-bold">
                Vegetarian
              </span>
              <span className="px-2 py-1 bg-red-400 text-sm rounded mr-2 bg-opacity-50 text-red-800 font-bold">
                Non - Vegetarian
              </span>
            </div>
            <MealPlans />
            <div className="flex flex-col md:flex-row mt-8">
              {/* <h1 className="text-md">Choose Your Plan :</h1> */}

              <select className=" p-2 border rounded-lg">
                <option className="" value="choose">Choose Your Plan</option>
                <option className="" value="option1">15 days</option>
                <option className="" value="option2">1 month</option>
                <option className="" value="option3">3 months</option>
              </select>
              <button className="bg-red-600 px-4 py-2 text-white  rounded-xl md:ml-8 w-auto mt-4 md:mt-0">
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full mt-7">
        <MenuTable />
      </div>
    </>
  );
};

export default Order3;
