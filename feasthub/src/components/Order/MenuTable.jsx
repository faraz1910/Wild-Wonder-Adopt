import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseSeller";

const MenuTable = ({ heading }) => {
  const [menuItem, setMenuItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "SellerMenu", "XwGcxBnNzCDkaTRStDpf");
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
  }, []);

  // useEffect(() => {
  //   onSnapshot(doc(db, "SellerMenu", "XwGcxBnNzCDkaTRStDpf"), (doc) => {
  //     // console.log("Current data: ", doc.data());
  //     setMenuItem(doc.data());
  //   });
  // });

  console.log(menuItem.friday_dinner);

  return (
    <>
      <div className="p-5 h-full mb-20 bg-gray-100">
        <h1 className="text-xl mb-2">{heading}</h1>

        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Days
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Lunch
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Dinner
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
                    Monday
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                {menuItem.monday_lunch && menuItem.monday_lunch.map(item => <p>{item}</p>)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.monday_dinner && menuItem.monday_dinner.map(item => <p>{item}</p>)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Tuesday
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.tuesday_lunch && menuItem.tuesday_lunch.map(item => <p>{item}</p>)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.tuesday_dinner && menuItem.tuesday_dinner.map(item => <p>{item}</p>)}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Wednesday
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.wednesday_lunch && menuItem.wednesday_lunch.map(item => <p>{item}</p>)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.wednesday_dinner && menuItem.wednesday_dinner.map(item => <p>{item}</p>)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Thursday
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.thursday_lunch && menuItem.thursday_lunch.map(item => <p>{item}</p>)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.thursday_dinner && menuItem.thursday_dinner.map(item => <p>{item}</p>)}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Friday
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {menuItem.friday_lunch && menuItem.friday_lunch.map(item => <p>{item}</p>)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.friday_dinner && menuItem.friday_dinner.map(item => <p>{item}</p>)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Saturday
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.saturday_lunch && menuItem.saturday_lunch.map(item => <p>{item}</p>)}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {menuItem.saturday_dinner && menuItem.saturday_dinner.map(item => <p>{item}</p>)}
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
