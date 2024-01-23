import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../assets/data";

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
        <div className="h-screen w-full bg-homeimg1 bg-center bg-cover bg-no-repeat -z-0 justify-center items-center flex flex-col">
          <h1 className="text-9xl font-bold text-white">
            Feast<span className="text-red-600">HUB</span>
          </h1>
          <div className="bg-red-600 px-4 my-3 rounded-lg">
            <p className="text-3xl text-white my-2 font-bold">
              Ab Ghar Jaisa Khana, Bahar Bhi
            </p>
          </div>
          <Link
            to="#"
            className="absolute top-3/4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Order Now
          </Link>
        </div>
      </div>

      <div className="w-3/4 m-auto">
        <div className="mt-40 mb-40">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 bg-red-600 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className="bg-red-600 text-white text-lg px-6 py-1 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
