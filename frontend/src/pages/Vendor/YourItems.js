import React, { useEffect, useState } from "react";

const YourItems = () => {
  const [items, setItems] = useState([]);

  const loadItems = () => {
    const stored = JSON.parse(localStorage.getItem("vendorItems")) || [];
    setItems(stored);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const deleteItem = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    localStorage.setItem("vendorItems", JSON.stringify(updated));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-success mb-0">Your Added Items</h4>
          <button className="btn btn-outline-primary btn-sm" onClick={loadItems}>
            Refresh
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-center">No items added yet.</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteItem(item.id)}
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
    </div>
  );
};

export default YourItems;
