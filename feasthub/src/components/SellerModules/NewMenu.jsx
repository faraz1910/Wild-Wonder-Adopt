import React, { useState } from "react";
import MenuTable from "../Order/MenuTable";
import { db, secondaryAuth } from "../../firebaseSeller";
import { collection, doc, updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";

const NewMenu = () => {
  const [newDish, setNewDish] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Function to handle form submission
  const handleAddItem = async (e) => {
    e.preventDefault();

    // Get the current user's email (assuming it's used as the seller's identifier)
    const user = secondaryAuth.currentUser;
    const sellerEmail = user ? user.email : null;

    // Validate inputs
    if (!sellerEmail || !newDish || !selectedDay || !selectedTime) {
      console.error("Please fill out all fields");
      return;
    }

    try {
      // Construct the Firestore document reference for the seller's menu
      const sellerMenuRef = doc(db, "SellerMenu", sellerEmail);

      // Check if the document exists
      const sellerMenuSnap = await getDoc(sellerMenuRef);

      if (sellerMenuSnap.exists()) {
        // If the document exists, update it
        await updateDoc(sellerMenuRef, {
          [`${selectedDay}_${selectedTime}`]: arrayUnion(newDish),
        });
      } else {
        // If the document doesn't exist, create it first and then update it
        await setDoc(sellerMenuRef, {
          [`${selectedDay}_${selectedTime}`]: [newDish],
        });
      }

      // Clear input fields after successful addition
      setNewDish("");
      setSelectedDay("");
      setSelectedTime("");

      console.log("New dish added successfully!");
    } catch (error) {
      console.error("Error adding new dish:", error);
    }
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full text-center">
          <h1 className="font-bold text-4xl py-4 uppercase ">
            MENU
            <br />
            <span className="text-red-600 text-3xl">Management</span>
          </h1>
          <hr className="mb-6" />
        </div>
        <div className="mb-6">
          <MenuTable heading={"Current Menu"} />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleAddItem} className="mb-12">
              <label className="mx-3"> Add New Dish : &nbsp;</label>
              <input
                className="p-2 mx-3 shadow-md"
                type="text"
                placeholder="New Dish"
                value={newDish}
                onChange={(e) => setNewDish(e.target.value)}
              />
              <select
                className="p-2 border rounded-lg mx-3 shadow-md"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">Choose Day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
              <select
                className="p-2 border rounded-lg mx-3 shadow-md"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Choose Time</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
              <button
                className="px-6 py-2 bg-red-600 font-bold text-white rounded-lg mx-3"
                type="submit"
              >
                Add Item
              </button>
            </form>
            <form action="">
              <label className="mx-3"> Set Per Tiffin Price : &nbsp;</label>
              <input
                className="p-2 mx-3 shadow-md"
                type="text"
                placeholder="Set Price"
              />
              <button
                className="px-6 py-2 bg-green-600 font-bold text-white rounded-lg mx-3"
                type="submit"
              >
                Update Price
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
  export default NewMenu;