import React from "react";
import data from "../../assets/data";

const Testimonials = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white py-16">
        <div className="carousel carousel-center max-w-30 p-4 space-x-10 bg-white rounded-box">

            {data.map((d, i) => (
                <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-box flex flex-col max-w-25"
              >
               <div className="h-56 bg-red-600 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>  
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
