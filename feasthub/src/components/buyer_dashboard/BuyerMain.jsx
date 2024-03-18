import React from 'react'
import BuyerSideNav from './BuyerSideNav'
import { Outlet } from 'react-router-dom'

const BuyerMain = () => {
  return (
    <>
      <div className="w-full h-full flex">
        <BuyerSideNav />
        <div className="w-full">
          {/* <Profile /> */}
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default BuyerMain