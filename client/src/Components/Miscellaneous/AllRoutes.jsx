import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import TicketDetails from "../Pages/TicketDetails";
import SeatSelection from "../Pages/SeatSelection";
import TicketListing from "../Pages/TicketListing";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticketListing" element={<TicketListing />} />
        <Route path="/ticketDetails" element={<TicketDetails />} />
        <Route path="/seatSelection" element={<SeatSelection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
  
      </Routes>
    </div>
  );
};

export default AllRoutes;
