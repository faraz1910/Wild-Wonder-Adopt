import React, { useEffect, useState } from 'react'


const MenuTable = ({heading}) => {


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
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Rajma, Chawal, Roti, Aalu Sabji
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
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rajma, Chawal, Roti, Aalu Sabji
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
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rajma, Chawal, Roti, Aalu Sabji
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
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rajma, Chawal, Roti, Aalu Sabji
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
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rajma, Chawal, Roti, Aalu Sabji
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
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rajma, Chawal, Roti, Aalu Sabji
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
    </>
  )
}

export default MenuTable