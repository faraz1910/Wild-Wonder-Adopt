import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebaseSeller";
import { collection, getDocs, addDoc } from "firebase/firestore";
const Contact = () => {
  const contactCollectionRef = collection(db, "ContactUs");
  const [newName, setnewName] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [newMessage, setnewMessage] = useState("");
  const createContact = async () => {
    await addDoc(contactCollectionRef, {
      name: newName,
      email: newEmail,
      message: newMessage,
    });
    alert("Your message was sent successfully!");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="w-full max-w-screen-lg md:flex justify-center ">
        <div className="hidden md:block">
        </div>
        <div class="flex flex-col w-10/12 mt-10 justify-center items-center ">
          <label className="form-control w-full max-w-xs mx-3 ">
            <div className="label ">
              <span className="label-text text-5xl font-black mb-4 ">
                Contact Us
              </span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs mx-3  ">
            <div className="label">
              <span className="label-text">Full name</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="bg-stone-200 h-9"
              onChange={(event) => {setnewName(event.target.value)}}
            />
          </label>
          <label className="form-control w-full max-w-xs mx-3">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder=""
              className="bg-stone-200 h-9"
              onChange={(event) => {setnewEmail(event.target.value)}}
            />
          </label>
          <label className="form-control w-full max-w-xs mx-3">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="bg-stone-200"
              onChange={(event) => {setnewMessage(event.target.value)}}
            ></textarea>
          </label>
          <div className="w-1/2 mb-20 justify-center items-center">
            {" "}
            <button
              onClick={createContact}
              className="w-full bg-green-600 py-3 rounded-xl text-white font-bold mt-6"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
