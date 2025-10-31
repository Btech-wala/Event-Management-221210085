import React from "react";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand fw-bold">Admin Dashboard</span>
      <div className="d-flex">
        <button className="btn btn-light btn-sm">Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
