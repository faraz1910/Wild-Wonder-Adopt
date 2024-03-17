import React from "react";
import MenuTable from "../Order/MenuTable";
import { db } from "../../firebaseSeller";
import { collection } from "firebase/firestore";

const NewMenu = () => {

    const collectionRef = collection(db, 'SellerMenu');


  return (
    <>
      <div className="w-full h-full">
        <div className="w-full text-center">
          <h1 className="font-bold text-4xl py-4 uppercase ">
            MENU
            <br />
            <span className="text-red-600 text-3xl">Management</span>
          </h1>
          <hr className="mb-6" />
        </div>
        <div className="mb-6">
          <MenuTable heading={"Current Menu"} />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col justify-center items-center">
          <form action="" className="mb-12">
            <label className="mx-3"> Add New Dish : &nbsp;</label>
            <input
              className="p-2 mx-3 shadow-md"
              type="text"
              placeholder="New Dish"
            />
            <select className=" p-2 border rounded-lg mx-3 shadow-md">
              <option className="" value="choose">
                Choose Day
              </option>
              <option className="" value="monday">
                Monday
              </option>
              <option className="" value="tuesday">
                Tuesday
              </option>
              <option className="" value="wednesday">
                Wednesday
              </option>
              <option className="" value="thursday">
                Thursday
              </option>
              <option className="" value="friday">
                Friday
              </option>
              <option className="" value="saturday">
                Saturday
              </option>
              <option className="" value="sunday">
                Sunday
              </option>
            </select>
            <select className=" p-2 border rounded-lg mx-3 shadow-md">
              <option className="" value="choose">
                Choose Time
              </option>
              <option className="" value="lunch">
                Lunch
              </option>
              <option className="" value="dinner">
                Dinner
              </option>
            </select>
            <button
              className="px-6 py-2 bg-red-600 font-bold text-white rounded-lg mx-3"
              type="submit"
            >
              Add Item
            </button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMenu;
