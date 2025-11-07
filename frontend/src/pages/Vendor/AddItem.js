import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: "",
    status: "Available",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!item.name || !item.category || !item.price) {
      setMessage("Please fill all fields!");
      return;
    }

    const newItem = { ...item, id: Date.now() };
    const storedItems = JSON.parse(localStorage.getItem("vendorItems")) || [];
    const updated = [...storedItems, newItem];
    localStorage.setItem("vendorItems", JSON.stringify(updated));

    setMessage("✅ Item added successfully!");
    setItem({ name: "", category: "", price: "", status: "Available" });

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h4 className="text-center text-primary mb-3">Add New Item</h4>

        <form onSubmit={handleAdd}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Item Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={item.name}
              onChange={handleChange}
              placeholder="Enter item name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={item.category}
              onChange={handleChange}
              placeholder="Enter category"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Price (₹)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={item.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Status</label>
            <select
              className="form-select"
              name="status"
              value={item.status}
              onChange={handleChange}
            >
              <option>Available</option>
              <option>Out of Stock</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success me-2">
              Add Item
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                setItem({ name: "", category: "", price: "", status: "Available" })
              }
            >
              Reset
            </button>
          </div>
        </form>

        {message && <p className="mt-3 text-center text-info">{message}</p>}
      </div>
    </div>
  );
};

export default AddItem;
