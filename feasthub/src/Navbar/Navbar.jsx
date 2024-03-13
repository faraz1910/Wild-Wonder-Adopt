import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setLoggedIn(true);
      } else {
        // No user is signed in.
        setLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <>
      <header className='shadow-md w-full sticky top-0 left-0 z-50'>
        <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div
            className="cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <Link to="/" className="text-3xl text-indigo-600 mr-1 pt-2">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <IoMenu />
          </div>

          {/* Conditionally render Navbar or login/register button */}
          {loggedIn ? <Navbar /> : (
            <Link
              to="login"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none absolute top-6 right-16 md:static"
            >
              Log In / Register
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
