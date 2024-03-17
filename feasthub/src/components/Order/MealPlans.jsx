import React from 'react'

const MealPlans = ({price}) => {
  return (
    <div className="flex flex-col mt-10">
              <h1 className="text-xl mb-2">Meal Plans</h1>
              <div className="flex flex-col gap-4 md:flex-row">
              <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <div>
                    <a
                      href="#"
                      className="text-blue-500 font-bold hover:underline text-lg"
                    >
                      Rs. {price*30}
                    </a>
                  </div>

                  <div>
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      15 days
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 flex flex-row">
                  <h1 className="font-bold">Include :</h1>&nbsp;
                  <p>Lunch and Dinner <span className='font-bold'>{"( 30 Tiffins )"}</span></p>
                </div>
                <div className="text-sm font-medium text-red-600">
                  Plans can be customize after placing the order by contacting
                  seller.
                </div>
              </div>
              <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <div>
                    <a
                      href="#"
                      className="text-blue-500 font-bold hover:underline text-lg"
                    >
                      Rs. {price*60}
                    </a>
                  </div>

                  <div>
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      1 Month
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 flex flex-row">
                  <h1 className="font-bold">Include :</h1>&nbsp;
                  <p>Lunch and Dinner <span className='font-bold'>{"( 60 Tiffins )"}</span></p>
                </div>
                <div className="text-sm font-medium text-red-600">
                  Plans can be customize after placing the order by contacting
                  seller.
                </div>
              </div>
              <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <div>
                    <a
                      href="#"
                      className="text-blue-500 font-bold hover:underline text-lg"
                    >
                      Rs. {price*180}
                    </a>
                  </div>

                  <div>
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      3 month
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 flex flex-row">
                  <h1 className="font-bold">Include :</h1>&nbsp;
                  <p>Lunch and Dinner <span className='font-bold'>{"( 180 Tiffins )"}</span></p>
                </div>
                <div className="text-sm font-medium text-red-600">
                  Plans can be customize after placing the order by contacting
                  seller.
                </div>
              </div>
              </div>
            </div>
  )
}

export default MealPlans