import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { auth } from "../../firebase";
import { secondaryAuth } from "../../firebaseSeller";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Why Us", link: "whyus" },
    { name: "Order", link: "order" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const [sellerEmail, setSellerEmail] = useState(null);
  const [BuyerEmail, setBuyerEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = secondaryAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setSellerEmail(user.email);
      } else {
        // No user is signed in.
        setSellerEmail(null);
      }
    });

    return () => {
      // Cleanup
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setBuyerEmail(user.email);
      } else {
        // No user is signed in.
        setBuyerEmail(null);
      }
    });

    return () => {
      // Cleanup
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    secondaryAuth
      .signOut()
      .then(() => {
        console.log("Logout successful. Redirecting to home page...");
        history.push(""); // Redirect to home page after logout
      })
      .catch((error) => {
        console.log("Error occurred during logout:", error);
      });
  };
  const handleLogoutBuyer = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logout successful. Redirecting to home page...");
        history.push(""); // Redirect to home page after logout
      })
      .catch((error) => {
        console.log("Error occurred during logout:", error);
      });
  };

  return (
    <>
      <header className="shadow-md w-full sticky top-0 left-0 z-50">
        <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <Link to="/" className="text-3xl text-indigo-600 mr-1 pt-2">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <IoMenu />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((d, i) => (
              <li key={i}>
                <NavLink
                  to={d.link}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-red-600" : "text-gray-500"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0 lg:mx-4 sm:m-0.5 md:m-0.5 md:text-base text-lg lg:font-semibold`
                  }
                  onClick={() => setOpen(!open)}
                >
                  {d.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {sellerEmail ? (
            <div className="flex items-center">
              {/* <span className="text-gray-700 mr-4 font-medium">
                Logged in as: {sellerEmail}
              </span> */}
              <button
                className=""
              >
                <div className="dropdown dropdown-hover ">
                  <div tabIndex={0} role="button" className="btn">
                  {sellerEmail}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
                  >
                    <li>
                      <NavLink to="seller"><a>Dashboard</a></NavLink>
                    </li>
                    <li>
                      <NavLink onClick={handleLogout}>Logout</NavLink>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          ) : BuyerEmail ? (
            <div className="flex items-center">
              <span className="text-gray-700 mr-4 font-medium">
                
              </span>
              <Link to="/">
              <button
                className=""
              >
                <div className="dropdown dropdown-hover ">
                  <div tabIndex={0} role="button" className="btn">
                  {BuyerEmail}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
                  >
                    <li>
                      <NavLink to="buyer"><a>Dashboard</a></NavLink>
                    </li>
                    <li>
                      <NavLink onClick={handleLogoutBuyer}>Logout</NavLink>
                    </li>
                  </ul>
                </div>
              </button>
              </Link>
            </div>
          ) : (
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
