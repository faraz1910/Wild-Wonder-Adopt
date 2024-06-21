import React, {useEffect, useState} from "react";
import { secondaryAuth } from "../../firebaseSeller";
import { db } from "../../firebaseSeller";
import { doc, getDoc, updateDoc, setDoc, arrayUnion, onSnapshot } from "firebase/firestore";

const SellerOrders = () => {

  const [orderInfo, setOrderInfo] = useState({});
  const [sellerEmail, setSellerEmail] = useState("");

  useEffect(() => {
    const user = secondaryAuth.currentUser;
    const email = user ? user.email : null;
    setSellerEmail(email);
  }, []);
  
  useEffect(() => {
    if (sellerEmail) {
      const fetchData = async () => {
        const docRef = doc(db, "OrderInfo", sellerEmail);
        const unsubscribe = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            setOrderInfo(doc.data());
            console.log(orderInfo);
          } else {
            // Handle the case where the document doesn't exist or is empty
            console.log("No data available");
          }
        });
        return () => unsubscribe();
      };

      fetchData();
    }
  }, [sellerEmail]);

  return (
    <>
      <div className="p-5 h-full mb-20 bg-gray-100">
        <h1 className="text-xl mb-2">Orders</h1>

        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  S. No.
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Adopted By
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Animal
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Plan Information
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Valid Till
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Txn. ID
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Amt. Paid
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-x-2 divide-gray-100">
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    1
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  Rohan Borade
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  12 Month
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  30-10-2025
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Tiger
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  #Uxhs14KNsnx8
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  200000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    active
                  </span>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    2
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  Atmaja
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  30 Days
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  30-05-2024
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  Python
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  #Uxhs76KS98hs
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  800
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                    expired
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SellerOrders;
