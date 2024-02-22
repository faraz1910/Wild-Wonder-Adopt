import React from "react";

const Profile = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="h-auto flex flex-col justify-center items-center bg-slate-200 rounded-2xl px-6 py-6">
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
                placeholder=""
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
                placeholder=""
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
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">GST No.</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone No.</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="number"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
            <button className="w-full bg-red-600 py-3 rounded-xl text-white font-bold mt-6">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
