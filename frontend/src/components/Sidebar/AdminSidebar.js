import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => (
  <div
    className="d-flex flex-column bg-light p-3 shadow"
    style={{ width: "220px", minHeight: "100vh" }}
  >
    <h5 className="text-center text-primary mb-4">Menu</h5>
    <NavLink to="/admin/dashboard/maintain-user" className="nav-link mb-2">Maintain User</NavLink>
    <NavLink to="/admin/dashboard/maintain-vendor" className="nav-link mb-2">Maintain Vendor</NavLink>
    <NavLink to="/admin/dashboard/membership" className="nav-link mb-2">Membership</NavLink>
    <NavLink to="/admin/dashboard/transaction" className="nav-link mb-2">Transaction</NavLink>
    <NavLink to="/admin/dashboard/reports" className="nav-link mb-2">Reports</NavLink>
  </div>
);

export default AdminSidebar;
