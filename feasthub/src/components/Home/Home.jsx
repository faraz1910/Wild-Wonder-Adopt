import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../assets/data";
import Testimonials from "./Testimonials";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="mx-auto w-full">
        <div className="h-screen w-full bg-homeimg1 bg-center bg-cover bg-no-repeat justify-center items-center flex flex-col">
          <h3 className="text-7xl font-bold text-white lg:text-9xl">
            Wild Wonder<span className="text-green-600">Adopt</span>
          </h3>
          <div className="bg-green-600 px-4 my-3 rounded-lg">
            <p className="text-xl text-white m-1 lg:m-2 font-bold lg:text-3xl">
              Animal Lover ? Adopt Them
            </p>
          </div>
          <Link
            to="order"
            className="mt-4 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Donate
          </Link>
        </div>
      </div>

      {/* <Testimonials /> */}

    </>
  );
};

export default Home;
