import React, { useEffect, useState } from "react";

const ProductStatus = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vendorItems")) || [];
    setItems(stored);
  }, []);

  return (
    <div>
      <h4 className="mb-3 text-success">Product Status</h4>
      {items.length === 0 ? (
        <p>No items to show.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <span
                    className={`badge bg-${
                      item.status === "Approved"
                        ? "success"
                        : item.status === "Rejected"
                        ? "danger"
                        : "warning"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductStatus;
