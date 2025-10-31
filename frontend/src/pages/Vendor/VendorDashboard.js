import React from "react";
import { Routes, Route } from "react-router-dom";
import VendorNavbar from "../../components/Navbar/VendorNavbar";
import VendorSidebar from "../../components/Sidebar/VendorSidebar";
import AddItem from "./AddItem";
import YourItems from "./YourItems";
import RequestItem from "./RequestItem";
import ProductStatus from "./ProductStatus";
import VendorTransaction from "./VendorTransaction";

const VendorDashboard = () => (
  <div>
    <VendorNavbar />
    <div className="d-flex">
      <VendorSidebar />
      <div className="p-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<h4>Welcome Vendor 👋</h4>} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="your-items" element={<YourItems />} />
          <Route path="request-item" element={<RequestItem />} />
          <Route path="product-status" element={<ProductStatus />} />
          <Route path="transaction" element={<VendorTransaction />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default VendorDashboard;
