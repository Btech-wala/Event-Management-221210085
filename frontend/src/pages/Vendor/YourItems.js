import React, { useEffect, useState } from "react";

const YourItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vendorItems")) || [];
    setItems(stored);
  }, []);

  const deleteItem = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    localStorage.setItem("vendorItems", JSON.stringify(updated));
  };

  return (
    <div>
      <h4 className="mb-3 text-success">Your Added Items</h4>
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
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
  );
};

export default YourItems;
