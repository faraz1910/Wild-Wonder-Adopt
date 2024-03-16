import React from 'react';

const Order2 = () => {
  const handleProceedToPay = () => {
    // Open index.js file in client folder
    window.open('I:\Programs\Feasthub\feasthub\Payment\client\src\index.js');
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="h-auto flex flex-col justify-center items-center bg-slate-200 rounded-2xl px-6 py-6">
          <h1 className="text-3xl font-bold mb-6">Order Details</h1>
          <div className="flex items-center mb-4">
            <img
              src="/src/assets/menu1.jpeg"
              className="w-60 h-50 rounded-full mr-8"
            />
            <div>
              <span className="text-2xl">
                <ul className="list-disc pl-4">
                  <li>Seller name :Vegetarian's Paradise</li>
                  <li>Menu : 1 Vegetable, 1 Dal, 3 Chapati, 1 Rice, 1 Salad/Soup </li>
                  <li>Contact : 845386792493</li>
                  <li>Price : 1000</li>
                </ul>

              </span>
            </div>
          </div>
          <div>
            <label className="block text-2xl font-bold mb-2">
              Subscription plans
            </label>
            <select className="w-40 p-2 border rounded">
              <option value="option1">15 days</option>
              <option value="option2">1 month</option>
              <option value="option3">3 months</option>
            </select>
            <h1 className="block text-2xl font-bold mb-2">Payments</h1>
            <select className="w-40 p-2 border rounded mb-2">
              <option value="creditCard">Credit Card</option>
              <option value="wallet">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleProceedToPay} // Call handleProceedToPay when button clicked
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order2;
