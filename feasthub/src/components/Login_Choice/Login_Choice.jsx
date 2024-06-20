import React from 'react'
import { Link } from 'react-router-dom'

function Login_Choice() {
  return (
    <>
    <div className='h-auto md:h-screen w-full md:flex'>
        {/* Left Side */}
        <div className='h-96 md:h-screen md:w-1/2 bg-green-600 flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-7xl font-bold text-white mb-10'>Donator Login</h1>
            <div className='flex'>
                <Link to="/buyer-login" className='bg-white text-green-600 py-2.5 px-7 text-2xl rounded-2xl mt-4 mx-8'>Login</Link>
                <Link to="/buyer-signup" className='bg-white text-green-600 py-2.5 px-7 text-2xl rounded-2xl mt-4 mx-8'>Register</Link>
            </div>
        </div>

        {/* Right Side */}
        <div className='h-96 md:h-screen md:w-1/2 bg-white flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-7xl font-bold text-green-600 mb-10'>Admin Login </h1>
            <div className='flex'>
                <Link to="/seller-login" className='bg-green-600 text-white py-2.5 px-7 text-2xl rounded-2xl mt-4 mx-8'>Login</Link>
                <Link to="/seller-signup" className='bg-green-600 text-white py-2.5 px-7 text-2xl rounded-2xl mt-4 mx-8'>Register</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login_Choice