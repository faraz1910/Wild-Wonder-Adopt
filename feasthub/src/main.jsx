import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Router,
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
import SellerMain from "./components/SellerModules/SellerMain.jsx";
import WhyUs from "./components/WhyUs/WhyUs.jsx";
import Profile from "./components/SellerModules/Profile.jsx";
import Services from "./components/SellerModules/Services.jsx";
import Menu from "./components/SellerModules/Menu.jsx";
import Clients from "./components/SellerModules/Clients.jsx";
import Contact from "./components/ContactUs/Contact.jsx";
import Order2 from "./components/Order/order2.jsx";
import Order3 from "./components/Order/Order3.jsx";
import NewMenu from "./components/SellerModules/NewMenu.jsx";
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
      <Route>
        <Route path="/orderinfo/:orderId" element={<Order3 />} />
        {/* Other routes go here */}
      </Route>
      <Route path="whyus" element={<WhyUs/>} />
      <Route path="buyer-login" element={<Buyer_Login />} />
      <Route path="buyer-signup" element={<Buyer_Signup />} />
      <Route path="seller-login" element={<Seller_Login />} />
      <Route path="seller-signup" element={<Seller_Signup />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="seller/" element={<SellerMain />} >
        <Route path="profile" element={<Profile/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="menu" element={<NewMenu/>}/>
        <Route path="clients" element={<Clients/>}/>
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
