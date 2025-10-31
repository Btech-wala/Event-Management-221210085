import React from "react";
import { NavLink } from "react-router-dom";

const VendorSidebar = () => (
  <div
    className="d-flex flex-column bg-light p-3 shadow"
    style={{ width: "220px", minHeight: "100vh" }}
  >
    <h5 className="text-center text-success mb-4">Menu</h5>
    <NavLink to="/vendor/dashboard/add-item" className="nav-link mb-2">Add Item</NavLink>
    <NavLink to="/vendor/dashboard/your-items" className="nav-link mb-2">Your Items</NavLink>
    <NavLink to="/vendor/dashboard/request-item" className="nav-link mb-2">Request Item</NavLink>
    <NavLink to="/vendor/dashboard/product-status" className="nav-link mb-2">Product Status</NavLink>
    <NavLink to="/vendor/dashboard/transaction" className="nav-link mb-2">Transaction</NavLink>
  </div>
);

export default VendorSidebar;
