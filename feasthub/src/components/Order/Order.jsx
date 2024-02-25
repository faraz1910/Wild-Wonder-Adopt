import React from "react";
import { seller } from "../../assets/sellerData";
import { FaStar } from 'react-icons/fa'
import { useState, useEffect } from "react";
import {db} from '../../firebaseSeller' 
import {collection, getDocs} from 'firebase/firestore'//establish a connection to a specific connection
const Order = () => {
  const [dataCount, setDataCount] = useState(0);
  const [businessName, setBusinessName] = useState([]);
  const businessNameCollectionRef = collection(db,"SellerInfo");
  
  useEffect(() => {

    // Fetch data from Firebase and get its count
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(businessNameCollectionRef);
        const count = snapshot.size; // Get count of items
        setDataCount(count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getBusinessName = async()=>{
      const data = await getDocs(businessNameCollectionRef);
      //console.log(data);
      //looping through the documents in the collection and setting to businessName array equal to doc
      setBusinessName(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    fetchData(); // Call the function to fetch data
    getBusinessName()
  },[])
  return (
    <>
      <div className="w-full  bg-white flex justify-center items-center">
        <div className="md:w-full">
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-1/2 h-10 rounded-xl mt-10 px-4 py-2 bg-gray-200"
              placeholder="Search Seller..."
            />
            <button className="h-10 rounded-xl mt-10 px-4 py-2 bg-red-500 font-bold text-white ml-2 ">
              Search
            </button>
          </div>
          <div className="mt-10 pt-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap md:justify-evenly">
            {seller.map((s) => (
              <div className="w-3/4 h-auto flex mb-6 flex-col md:w-96">
                <div className="w-full h-auto rounded-2xl bg-white text-center mr-3">
                  <img src={s.img} alt="Seller" />
                </div>
                <div className="w-full p-2 pl-4 h-auto flex flex-col justify-around">
                  <div >
                    {businessName.map((b) => {
                        return(
                        <div>
                          <h4 className="font-bold text-lg mb-2">{b.fname}</h4>
                        <p className="pt-2">{b.address}</p>
                        </div>
                        );
                    })}
                    
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="flex flex-start">
                      { <span className="px-1 py-0.5 bg-pink-300 text-sm rounded mr-1.5">
                        Lunch
                      </span>}
                      {<span className="px-1 py-0.5 bg-pink-300 text-sm rounded mr-1.5">
                        Dinner
                      </span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
