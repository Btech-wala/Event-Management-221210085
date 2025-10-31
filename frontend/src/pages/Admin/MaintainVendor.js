import React, { useEffect, useState } from "react";

const MaintainVendor = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem("vendors")) || [
      { id: 1, name: "Decor Pro", category: "Decoration", email: "decorpro@gmail.com" },
      { id: 2, name: "Foodies Hub", category: "Catering", email: "foodies@gmail.com" },
    ];
    setVendors(storedVendors);
  }, []);

  const deleteVendor = (id) => {
    const updated = vendors.filter((v) => v.id !== id);
    setVendors(updated);
    localStorage.setItem("vendors", JSON.stringify(updated));
  };

  return (
    <div>
      <h4 className="mb-3 text-primary">Maintain Vendors</h4>
      {vendors.length === 0 ? (
        <p>No vendors available.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Category</th><th>Email</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.category}</td>
                <td>{v.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteVendor(v.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MaintainVendor;
