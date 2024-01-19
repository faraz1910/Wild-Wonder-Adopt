import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto w-full">
      <div className="h-screen w-full bg-homeimg1 bg-center bg-cover bg-no-repeat -z-0 justify-center items-center flex flex-col">
        <h1 className="text-9xl font-bold text-white">
          Feast<span className="text-red-600">HUB</span>
        </h1>
        <div className="bg-red-600 px-4 my-3 rounded-lg">
          <p className="text-3xl text-white my-2 font-bold">
            Ab Ghar Jaisa Khana, Bahar Bhi
          </p>
        </div>
        <Link to="#" className="text-white bg-red-600 hover:bg-red-700 mt-4 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">Order Now</Link>
      </div>
    </div>
  );
};

export default Home;
