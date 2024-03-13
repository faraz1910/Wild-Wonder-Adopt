import React, { useState, useEffect } from "react";
import { signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { db } from '../../firebaseSeller';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const Profile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userEmail = queryParams.get('email');

  const businessNameCollectionRef = collection(db, "SellerInfo");
  const [newFirstName, setnewFirstName] = useState("");
  const [newLasttName, setnewLasttName] = useState("");
  const [newBusinessName, setBusinessName] = useState("");
  const [newGst, setnewGst] = useState("");
  const [newPhone, setnewPhone] = useState(0);
  const [newAddress, setnewAddress] = useState("");

  const createSeller = async () => {
    await addDoc(businessNameCollectionRef, {
      fname: newFirstName,
      lname: newLasttName,
      businessName: newBusinessName,
      gstNo: newGst,
      phone: newPhone,
      address: newAddress
    });
    alert("Seller added successfully!");
  }
  return (
    <>
     <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
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
                onChange={(event) => {setnewFirstName(event.target.value)}}
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
                onChange={(event) => {setnewLasttName(event.target.value)}}
              />
            </label>
          </div>
          <div className="w-full px-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Business Name</span>
                <span className="label-text-al text-red-600 text-xl font-bold">
                  *
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
                onChange={(event) => {setBusinessName(event.target.value)}}
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
                onChange={(event) => {setnewGst(event.target.value)}}
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
                onChange={(event) => {setnewPhone(event.target.value)}}
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
                onChange={(event) => {setnewAddress(event.target.value)}}
              />
            </label>
            <button onClick={createSeller} className="w-full bg-red-600 py-3 rounded-xl text-white font-bold mt-6">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
