import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import UserNavbar from "../../components/Navbar/UserNavbar";
import VendorsList from "./VendorsList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderStatus from "./OrderStatus";

const UserDashboard = () => (
  <div>
    <UserNavbar />
    <div className="container mt-4">
      <nav className="nav nav-pills mb-4">
        <NavLink to="/user/dashboard/vendors" className="nav-link me-2">Vendors</NavLink>
        <NavLink to="/user/dashboard/cart" className="nav-link me-2">Cart</NavLink>
        <NavLink to="/user/dashboard/checkout" className="nav-link me-2">Checkout</NavLink>
        <NavLink to="/user/dashboard/order-status" className="nav-link">Order Status</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h5>Welcome User 👋</h5>} />
        <Route path="vendors" element={<VendorsList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-status" element={<OrderStatus />} />
      </Routes>
    </div>
  </div>
);

export default UserDashboard;
