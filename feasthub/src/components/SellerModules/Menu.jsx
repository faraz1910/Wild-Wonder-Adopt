import React, { useState} from 'react';
import EditableTable from './EditableTable';
import TimePicker from './TimePicker';
const Menu = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div class="ps-7 ... font-serif">
      <h1 class="py-7 ... text-3xl">Menu Management</h1>
      <div class="border-solid border-2 border-slate-300 ... p-7">
        <h3 class="py-1 ... text-xl">Menu Information</h3>
        <p class="text-gray-600">Select the type of menu provided</p>
        <div class="py-1">
          <input type="checkbox" /> Veg
          <span class="pr-3.5"></span>
          <input type="checkbox" /> Veg & Non- Veg
        </div>
        <hr class="h-px my-8 bg-gray-300 border-0 light:bg-gray-700 w-full ..."/>
        <h3 class="pt-3 text-xl">Menu Plan</h3>
        <p class="text-gray-600">Create weekly based meal plans</p>

        <EditableTable></EditableTable>
        <hr class="h-px my-8 bg-gray-300 border-0 light:bg-gray-700 w-full ..."/>

        <h3 class="pt-3 text-xl">Upload Menu Photos</h3>
        <p class="text-gray-600">Upload Menu Photos for Customers to Explore and Subscribe to Your Meal Plans</p>
        <input type="file" onChange={handleChange} class='pt-3' />
            <img src={file} />
        <hr class="h-px my-8 bg-gray-300 border-0 light:bg-gray-700 w-full ..."/>
        <h3 class='pt-3 text-xl'>Delivery Timings</h3>
        <p class="text-gray-600">Set Timing for Tiffin Delivery</p>
        
        <p class="pt-3">Lunch  <TimePicker></TimePicker> Dinner  <TimePicker></TimePicker></p>
        <hr class="h-px my-8 bg-gray-300 border-0 light:bg-gray-700 w-full ..."/>

        <h3 class="pt-3 text-xl">Set Price</h3>
        <p class="text-gray-600">Set your tiffin services price on monthly basis</p>
        <input type="text" className="input input-bordered w-full max-w-xs"/>
        <hr class="h-px my-8 bg-gray-300 border-0 light:bg-gray-700 w-full ..."/>


        <button type='submit' class='w-1/2 bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 place-content-center'>Save</button>
      </div>
    </div>
  );
};

export default Menu;
