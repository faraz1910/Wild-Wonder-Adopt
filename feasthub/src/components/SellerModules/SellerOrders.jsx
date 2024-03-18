import React from "react";

const SellerOrders = () => {
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
                  Client Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Plan Information
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Expiry
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
                  Ashta Tiffin
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  1 Month
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  30-10-2024
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  #Uxhs14KNsnx8
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  1000
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
                  Veg Paradise
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  15 Days
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  30-10-2024
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  #Uxhs76KS98hs
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  1000
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
