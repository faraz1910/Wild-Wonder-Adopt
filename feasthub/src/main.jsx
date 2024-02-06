import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Buyer_Login from "./components/Login/Buyer_Login.jsx";
import Buyer_Signup from "./components/Signup/Buyer_Signup.jsx";
import Seller_Login from "./components/Login/Seller_Login.jsx";
import Seller_Signup from "./components/Signup/Seller_Signup.jsx";
import Login_Choice from "./components/Login_Choice/Login_Choice.jsx";
import Order from "./components/Order/Order.jsx";
import SideNav from "./components/SellerModules/SideNav.jsx";
import SellerMain from "./components/SellerModules/SellerMain.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login_Choice />} />
      <Route path="order" element={<Order />} />
      <Route path="buyer-login" element={<Buyer_Login />} />
      <Route path="buyer-signup" element={<Buyer_Signup />} />
      <Route path="seller-login" element={<Seller_Login />} />
      <Route path="seller-signup" element={<Seller_Signup />} />
      <Route path="seller" element={<SellerMain />} >
        
      </Route>
      <Route path="*" element={<div>Page under maintainance !!!</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
