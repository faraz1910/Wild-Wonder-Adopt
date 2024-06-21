import React from "react";
import { seller } from "../../assets/sellerData";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebaseSeller";
import { collection, getDocs } from "firebase/firestore"; //establish a connection to a specific connection

const Order = () => {
  const [dataCount, setDataCount] = useState(0);
  const [businessName, setBusinessName] = useState([]);
  const businessNameCollectionRef = collection(db, "SellerInfo");

  useEffect(() => {
    // Fetch data from Firebase and get its count
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(businessNameCollectionRef);
        const count = snapshot.size; // Get count of items
        setDataCount(count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getBusinessName = async () => {
      const data = await getDocs(businessNameCollectionRef);
      //console.log(data);
      //looping through the documents in the collection and setting to businessName array equal to doc
      setBusinessName(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData(); // Call the function to fetch data
    getBusinessName();
  }, []);

  return (
    <>
      <div className="w-full  bg-white flex justify-center items-center mb-20 px-10">
        <div className="md:w-full flex gap-10">
          {/* <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-1/2 h-10 rounded-xl mt-10 px-4 py-2 bg-gray-200"
              placeholder="Search Seller..."
            />
            <button className="h-10 rounded-xl mt-10 px-4 py-2 bg-red-500 font-bold text-white ml-2 ">
              Search
            </button>
          </div> */}
          {/* <div className="mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {businessName.map((b) => (
              <div key={b.id} className="w-full rounded-xl bg-white shadow-xl">
                <div className="h-64 overflow-hidden rounded-t-2xl">
                  <img src="src/assets/orderImg.jpg" alt="Seller" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{b.businessName}</h3>
                  <h6 className="font-bold text-lg mb-1">₹ {b.price}</h6>
                  <h5 className="text-base">{b.fname} {b.lname} - {b.phone}</h5>
                  <p className="mb-4">{b.address}</p>
                  <div className="flex justify-between items-center">
                    <div>
                    <span className="px-2 py-1 bg-pink-300 text-sm rounded mr-2">
                      Lunch
                    </span>
                    <span className="px-2 py-1 bg-pink-300 text-sm rounded mr-2">
                      Dinner
                    </span>
                    </div>
                    <Link to={`/orderinfo/${b.id}`}>
                  <button className="text-white bg-red-600 focus:ring-4 focus:ring-red-300 font-extrabold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">View Info</button>
                  </Link>
                  </div>
                  
                </div>
              </div>
            ))}
          </div> */}
          <div className=" rounded-xl bg-white shadow-xl w-96 mt-20">
            <div className="h-64 overflow-hidden rounded-t-2xl">
              <img
                src="src/assets/tiger.jpg"
                alt="Seller"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Gauri Tiger</h3>
              <h6 className="font-bold text-lg mb-1">₹ 2,00,000</h6>
              {/* <h5 className="text-base">{b.fname} {b.lname} - {b.phone}</h5> */}
              <p className="mb-4">Van Vihar National Park</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="px-2 py-1 bg-orange-300 text-sm rounded mr-2">
                    Tiger
                  </span>
                  <span className="px-2 py-1 bg-orange-300 text-sm rounded mr-2">
                    11 Years
                  </span>
                </div>
                <Link to={`/orderinfo/`}>
                  <button className="text-white bg-green-600 focus:ring-4 focus:ring-green-300 font-extrabold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
                    View Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white shadow-xl w-96 mt-20">
            <div className="h-64 overflow-hidden rounded-t-2xl">
              <img
                src="src/assets/white_tiger.jpg"
                alt="Seller"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">White Tiger</h3>
              <h6 className="font-bold text-lg mb-1">₹ 2,00,000</h6>
              {/* <h5 className="text-base">{b.fname} {b.lname} - {b.phone}</h5> */}
              <p className="mb-4">Van Vihar National Park</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="px-2 py-1 bg-orange-300 text-sm rounded mr-2">
                    Tiger
                  </span>
                  <span className="px-2 py-1 bg-orange-300 text-sm rounded mr-2">
                    6 Years
                  </span>
                </div>
                <Link to={`/orderinfo/`}>
                  <button className="text-white bg-green-600 focus:ring-4 focus:ring-green-300 font-extrabold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
                    View Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-xl bg-white shadow-xl w-96 mt-20">
            <div className="h-64 overflow-hidden rounded-t-2xl">
              <img
                src="src/assets/leapord.jpg"
                alt="Seller"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Leapord</h3>
              <h6 className="font-bold text-lg mb-1">₹ 1,50,000</h6>
              {/* <h5 className="text-base">{b.fname} {b.lname} - {b.phone}</h5> */}
              <p className="mb-4">Van Vihar National Park</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="px-2 py-1 bg-orange-300 text-sm rounded mr-2">
                    Leapord
                  </span>
                  <span className="px-2 py-1 bg-orange-300 text-sm rounded mr-2">
                    4 Years
                  </span>
                </div>
                <Link to={`/orderinfo/`}>
                  <button className="text-white bg-green-600 focus:ring-4 focus:ring-green-300 font-extrabold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
                    View Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
