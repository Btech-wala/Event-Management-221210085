import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import MaintainUser from "./MaintainUser";
import MaintainVendor from "./MaintainVendor";
import Membership from "./Membership";
import Transaction from "./Transaction";
import Reports from "./Reports";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="d-flex">
        <AdminSidebar />
        <div className="p-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<h4>Welcome Admin 👋</h4>} />
            <Route path="maintain-user" element={<MaintainUser />} />
            <Route path="maintain-vendor" element={<MaintainVendor />} />
            <Route path="membership" element={<Membership />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
