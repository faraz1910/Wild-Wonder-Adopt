import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseSeller";

const MenuTable = ({ heading, sellerEmail }) => {
  const [menuItem, setMenuItem] = useState({});

  useEffect(() => {
    if (sellerEmail) {
      const fetchData = async () => {
        const docRef = doc(db, "SellerMenu", sellerEmail);
        const unsubscribe = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            setMenuItem(doc.data());
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
        <h1 className="text-xl mb-2">Adoption Prices</h1>

        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Species
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Year
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Half Year
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Quarter
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Month
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
                    Tiger
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  2,00,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  1,00,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  50,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  17.000
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Lion
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  2,00,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  1,00,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  50,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  17.000
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Leapord
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  1,00,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  50,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  9,000
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Sloth Bear
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  1,00,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  50,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  9,000
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Hyena
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                36,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  19,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4,000
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Jackal
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  30,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  9,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  3,500
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Crocodile
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  36,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  19,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  10,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4,000
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Python
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                  8,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  4,500
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  2,300
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  800
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MenuTable;
