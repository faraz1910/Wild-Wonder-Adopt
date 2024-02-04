import React from "react";
import data from "../../assets/data";

const Testimonials = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white py-16">
        <div className="carousel carousel-center max-w-6xl p-4 space-x-10 bg-white rounded-box">

            {data.map((d, i) => (
                <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-box carousel-item flex flex-col max-w-xl"
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
        </div>
      </div>
    </>
  );
};

export default Testimonials;
