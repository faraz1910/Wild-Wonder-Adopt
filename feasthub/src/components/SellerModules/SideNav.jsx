import React from 'react'

const SideNav = () => {
  return (
    <>
    <div className='h-screen w-64 border-r-2 p-5'>
      <div className=''>
        <p className='font-bold'>Seller</p>
        <h4 className='text-3xl font-bold -mt-2 text-red-600'>Dashboard</h4>
      </div>
      <div className='mt-8'>
        <ul>
          <li className='text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold'>Profile</li>
          <li className='text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold'>Services</li>
          <li className='text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold'>Menu</li>
          <li className='text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold'>Orders</li>
          <li className='text-lg my-4 py-2 pl-3 bg-gray-200 rounded-lg font-semibold'>Clients</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default SideNav