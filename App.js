import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Pages
import AdminLogin from "./pages/Auth/AdminLogin";
import VendorLogin from "./pages/Auth/VendorLogin";
import UserLogin from "./pages/Auth/UserLogin";
import Signup from "./pages/Auth/Signup";

// Admin Dashboard + Modules
import AdminDashboard from "./pages/Admin/AdminDashboard";
import MaintainUser from "./pages/Admin/MaintainUser";
import MaintainVendor from "./pages/Admin/MaintainVendor";
import Membership from "./pages/Admin/Membership";
import Transaction from "./pages/Admin/Transaction";
import Reports from "./pages/Admin/Reports";


// Vendor Dashboard + Modules
import VendorDashboard from "./pages/Vendor/VendorDashboard";
import AddItem from "./pages/Vendor/AddItem";
import YourItems from "./pages/Vendor/YourItems";
import RequestItem from "./pages/Vendor/RequestItem";
import ProductStatus from "./pages/Vendor/ProductStatus";
import VendorTransaction from "./pages/Vendor/VendorTransaction";

// User Dashboard + Modules
import UserDashboard from "./pages/User/UserDashboard";
import VendorsList from "./pages/User/VendorsList";
import Cart from "./pages/User/Cart";
import Checkout from "./pages/User/Checkout";
import OrderStatus from "./pages/User/OrderStatus";

// Common
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>

        {/* ---------- AUTH ROUTES ---------- */}
        <Route path="/" element={<UserLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/signup" element={<Signup />} />

        {/* ---------- ADMIN DASHBOARD ---------- */}
        <Route path="/admin/dashboard/*" element={<AdminDashboard />}>
          <Route path="maintain-user" element={<MaintainUser />} />
          <Route path="maintain-vendor" element={<MaintainVendor />} />
          <Route path="membership" element={<Membership />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* ---------- VENDOR DASHBOARD ---------- */}
        <Route path="/vendor/dashboard/*" element={<VendorDashboard />}>
          <Route path="add-item" element={<AddItem />} />
          <Route path="your-items" element={<YourItems />} />
          <Route path="request-item" element={<RequestItem />} />
          <Route path="product-status" element={<ProductStatus />} />
          <Route path="transaction" element={<VendorTransaction />} />
        </Route>

        {/* ---------- USER DASHBOARD ---------- */}
        <Route path="/user/dashboard/*" element={<UserDashboard />}>
          <Route path="vendors" element={<VendorsList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-status" element={<OrderStatus />} />
        </Route>

        {/* ---------- FALLBACK ---------- */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
