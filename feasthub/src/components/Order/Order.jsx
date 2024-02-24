import React from "react";
import { seller } from "../../assets/sellerData";
import { FaStar } from 'react-icons/fa'

const Order = () => {
  return (
    <>
      <div className="w-full  bg-white flex justify-center items-center">
        <div className="md:w-full">
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-1/2 h-10 rounded-xl mt-10 px-4 py-2 bg-gray-200"
              placeholder="Search Seller..."
            />
            <button className="h-10 rounded-xl mt-10 px-4 py-2 bg-red-500 font-bold text-white ml-2 ">
              Search
            </button>
          </div>
          <div className="mt-10 pt-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap md:justify-evenly">
            {seller.map((s) => (
              <div key={s.id} className="w-3/4 h-auto flex mb-6 flex-col md:w-96">
                <div className="w-full h-auto rounded-2xl bg-white text-center mr-3">
                  <img src={s.img} alt="Seller" />
                </div>
                <div className="w-full p-2 pl-4 h-auto flex flex-col justify-around">
                  <div>
                    <h4 className="font-bold text-lg mb-2">{s.name}</h4>
                    <div className="flex">
                    {[...Array(5)].map((star, index) => <FaStar color="yellow"/>)}
                    </div>
                    <p className="pt-2">
                     {s.description}
                    </p>
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="flex flex-start">
                      {s.breakfast && <span className="px-1 py-0.5 bg-pink-300 text-sm rounded mr-1.5">
                        Breakfast
                      </span>}
                      {s.lunch && <span className="px-1 py-0.5 bg-pink-300 text-sm rounded mr-1.5">
                        Lunch
                      </span>}
                      {s.dinner && <span className="px-1 py-0.5 bg-pink-300 text-sm rounded mr-1.5">
                        Dinner
                      </span>}
                    </div>
                    <div className="flex flex-start mt-2">
                      {s.veg && <span className="px-1 py-0.5 bg-green-300 text-sm rounded mr-1.5">
                        Veg
                      </span>}
                      {s.nonveg && <span className="px-1 py-0.5 bg-red-300 text-sm rounded mr-1.5">
                        Non-Veg
                      </span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
