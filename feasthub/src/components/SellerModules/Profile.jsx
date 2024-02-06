import React from "react";

const Profile = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-gray-300">
        <div className="flex">
          <label className="form-control w-full max-w-xs mx-3">
            <div className="label">
              <span className="label-text">First Name</span>
              <span className="label-text-al text-red-600 text-xl font-bold">
                *
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mx-3">
            <div className="label">
              <span className="label-text">Last Name</span>
              <span className="label-text-al text-red-600 text-xl font-bold">
                *
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="w-full px-3">
        <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seller Name</span>
              <span className="label-text-al text-red-600 text-xl font-bold">
                *
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full mx-3">
            <div className="label">
              <span className="label-text">GST No.</span>
              <span className="label-text-al text-red-600 text-xl font-bold">
                *
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Profile;
