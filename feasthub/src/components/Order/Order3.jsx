import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseSeller";
import MenuTable from "./MenuTable";
import MealPlans from "./MealPlans";
import { RiArrowDropDownLine } from "react-icons/ri";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';

const Order3 = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [businessAddress, setBusinessAddress] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderRef = doc(db, "SellerInfo", orderId);
        const orderSnapshot = await getDoc(orderRef);
        if (orderSnapshot.exists()) {
          const orderData = orderSnapshot.data();
          console.log("Order data:", orderData);
          setOrderData(orderData);

          // Fetch the business address associated with the orderId
          const businessQuerySnapshot = await getDocs(businessNameCollectionRef);
          businessQuerySnapshot.forEach(doc => {
            if (doc.data().orderId === orderId) {
              setBusinessAddress(doc.data().address);
            }
          });
        } else {
          console.log("No such order exists!");
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderData();
  }, [orderId]);
  return (
      <>
          {businessAddress && <h1>{businessAddress}</h1>}
      {orderData && (
        <div>
          {/* Render other order details */}
<div className="flex flex-col bg-gray-50 justify-between md:flex-row md p-8">
<div className="w-full h-full md:w-auto">
  <img
    src="/src/assets/orderImg.jpg"
    alt="Seller"
    className="w-full h-full object-cover md:h-[30rem] md:w-[40rem] "
  />
</div>
<div className="flex flex-col mt-4 mx-2 md:ml-10 ">
  <div className="flex flex-col">
    <div className="font-semibold ">
      <h1 className="text-3xl font-bold mb-2">{orderData.businessName}</h1>
      <><p className="text-xl mb-2">{orderData.fname } {orderData.lname}</p></>
      
    </div>
    <p className="mb-1">{orderData.address}</p>
    <p>{orderData.phone}</p>
    <hr className="my-4" />
    <p>
    Enjoy the convenience of our tiffin service! Our menu features a variety of wholesome, home-cooked dishes made with fresh ingredients. Whether you prefer classic flavors or adventurous cuisines, we've got you covered. Say goodbye to meal prep stress and hello to tasty, convenient, and nutritious meals with our tiffin service!
    </p>
    <div className="mt-4">
      <span className="px-2 py-1 bg-green-300 text-sm rounded mr-2 bg-opacity-50 text-green-800 font-bold">
        Vegetarian
      </span>
      <span className="px-2 py-1 bg-red-400 text-sm rounded mr-2 bg-opacity-50 text-red-800 font-bold">
        Non - Vegetarian
      </span>
    </div>
    <MealPlans price={orderData.price}/>
    <div className="flex flex-col md:flex-row mt-8">
      {/* <h1 className="text-md">Choose Your Plan :</h1> */}

      <select className=" p-2 border rounded-lg">
        <option className="" value="choose">Choose Your Plan</option>
        <option className="" value="option1">15 days</option>
        <option className="" value="option2">1 month</option>
        <option className="" value="option3">3 months</option>
      </select>
      <button className="bg-red-600 px-4 py-2 text-white  rounded-xl md:ml-8 w-auto mt-4 md:mt-0">
        Proceed To Pay
      </button>
    </div>
  </div>
</div>
</div>

{/* Table */}
<div className="w-full mt-7">
<MenuTable heading={'Menu'}/>
</div>
          </div>
      )}

      </>
  );
};

export default Order3;




