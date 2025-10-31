import React, { useState } from "react";

const VendorTransaction = () => {
  const [transactions] = useState([
    { id: 1, item: "Wedding Lights", amount: 1200, date: "2025-10-15" },
    { id: 2, item: "Stage Decoration", amount: 5000, date: "2025-10-28" },
  ]);

  return (
    <div>
      <h4 className="mb-3 text-success">Transaction History</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Amount (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.item}</td>
              <td>{t.amount}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTransaction;
