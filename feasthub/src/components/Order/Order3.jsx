import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseSeller"; // Assuming you have access to Firebase auth for getting the current user's email
import MenuTable from "./MenuTable";
import { auth } from "../../firebase";
import MealPlans from "./MealPlans";
import { doc, getDoc, addDoc, collection, setDoc } from 'firebase/firestore';

const Order3 = ({price}) => {

  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(""); // State to track selected plan
  const [orderIdFromFirebase, setOrderIdFromFirebase] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState(null); // State to store current user's email

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderRef = doc(db, "SellerInfo", orderId);
        const orderSnapshot = await getDoc(orderRef);
        if (orderSnapshot.exists()) {
          const orderData = orderSnapshot.data();
          console.log("Order data:", orderData);
          setOrderData(orderData);
        } else {
          console.log("No such order exists!");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderData();
  }, [orderId]);

  useEffect(() => {
    const generateOrderId = async () => {
      try {
        const orderIDsRef = collection(db, "OrderIDs");
        const orderIDDoc = await addDoc(orderIDsRef, {});
        console.log("Order ID generated:", orderIDDoc.id);
        setOrderIdFromFirebase(orderIDDoc.id);
      } catch (error) {
        console.error('Error generating order ID:', error);
      }
    };

    if (orderData) {
      generateOrderId();
    }
  }, [orderData]);

  useEffect(() => {
    const fetchCurrentUserEmail = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setCurrentUserEmail(user.email);
        }
      } catch (error) {
        console.error('Error fetching current user details:', error);
      }
    };

    fetchCurrentUserEmail();
  }, []);

  const handlePayment = async () => {
    if (!orderIdFromFirebase || !orderData || !currentUserEmail) {
      console.error('Order ID from Firebase, order data, or current user email is not valid.');
      return;
    }

    let planMultiplier = 0;
    switch (selectedPlan) { // Use selectedPlan instead of orderData.selectedPlan
      case '15 days':
        planMultiplier = 2 * 15; // 15 days
        break;
      case '1 month':
        planMultiplier = 2 * 30; // 30 days
        break;
      case '3 months':
        planMultiplier = 2 * 30 * 3; // 90 days
        break;
      default:
        console.error('Invalid plan selected.');
        return;
    }
    const orderPrice = planMultiplier * orderData.price; // Use orderData.price to calculate the order price
    const today = new Date();
    const expiryDate = new Date(today.getTime() + planMultiplier * 24 * 60 * 60 * 1000);
    
    const orderInfo = {
      buyerEmail: orderData.email,
      sellerBusinessName: orderData.businessName,
      planDuration: selectedPlan, // Use selectedPlan instead of hardcoding "15 days"
      expiryDate: expiryDate.toISOString(),
      transactionId: orderIdFromFirebase,
      amountPaid: orderPrice,
    };

    try {
      // Store orderInfo in seller's Firestore collection with the seller's email as the document name
      await setDoc(doc(db, "OrderInfo", orderData.email), orderInfo);
      console.log("Order info stored successfully in Seller's Firestore:", orderInfo);

      // Store orderInfo in buyer's Firestore collection with the buyer's email as the document name
      await setDoc(doc(db, "BorderInfo", currentUserEmail), orderInfo);
      console.log("Order info stored successfully in Buyer's Firestore:", orderInfo);
    } catch (error) {
      console.error("Error storing order info:", error);
    }

    // Sample values for testing
    const amount = orderPrice*100; // Sample amount
    const currency = 'INR'; // Sample currency
    const receiptId = 'receipt_id'; // Sample receipt ID

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    // Assuming the Razorpay script is included in your HTML
    const options = {
      key: "rzp_test_FgkKJgI3ywpCgV",
      amount,
      currency,
      name: "FeastHub",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: function (response) {
        console.log(response);
        // Handle successful payment response here
      },
      prefill: {
        name: "Rohan",
        email: "rohan@example.com",
        contact: "9000000000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.error('Payment failed:', response.error);
    });
    rzp1.open();
  };

  const mealType = () => {
    if (orderData.type === "veg") {
      return (
        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
          Vegetarian
        </span>
      );
    } else if (orderData.type === "non-veg") {
      return (
        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
          Non-Vegeterian
        </span>
      );
    } else {
      return (
        <>
          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
            Vegetarian
          </span>{" "}
          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
            Non-Vegeterian
          </span>
        </>
      );
    }
  };

  return (
    <>
      {orderData && (
        <div>
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
                  <h1 className="text-3xl font-bold mb-2">
                    {orderData.businessName}
                  </h1>
                  <p className="text-xl mb-2">
                    {orderData.fname} {orderData.lname}
                  </p>
                  {/* <span className="px-2 py-1 bg-stone-800 text-sm rounded mr-2 bg-opacity-50 text-slate-100 font-bold">
                  {orderData.type}
                  </span> */}

                  {mealType()}
                </div>
                <p className="mb-1 mt-2">{orderData.address}</p>
                <p>{orderData.phone}</p>
                <hr className="my-4" />
                <p>
                  Enjoy the convenience of our tiffin service! Our menu features
                  a variety of wholesome, home-cooked dishes made with fresh
                  ingredients. Whether you prefer classic flavors or adventurous
                  cuisines, we've got you covered. Say goodbye to meal prep
                  stress and hello to tasty, convenient, and nutritious meals
                  with our tiffin service!
                </p>
                <div className="mt-4"></div>
                <MealPlans price={orderData.price}/>
                <div className="flex flex-col md:flex-row mt-8">
                  <select className="p-2 border rounded-lg" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                    <option value="">Choose Your Plan</option>
                    <option value="15 days">15 days</option>
                    <option value="1 month">1 month</option>
                    <option value="3 months">3 months</option>
                  </select>
                  <button onClick={handlePayment} className="bg-red-600 px-4 py-2 text-white rounded-xl md:ml-8 w-auto mt-4 md:mt-0">
                    Proceed To Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-7">
            <MenuTable heading={"Menu"} sellerEmail={orderData.email} />
          </div>
        </div>
      )}
    </>
  );
};

export default Order3;
