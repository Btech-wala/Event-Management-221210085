import React, { useEffect, useState } from "react";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const sample = [
      { id: 1, user: "Riya Sharma", vendor: "Foodies Hub", amount: 3500, date: "2025-10-30" },
      { id: 2, user: "Aman Gupta", vendor: "Decor Pro", amount: 5000, date: "2025-10-31" },
    ];
    setTransactions(sample);
  }, []);

  return (
    <div>
      <h4 className="mb-3 text-primary">All Transactions</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>User</th><th>Vendor</th><th>Amount (₹)</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.user}</td>
              <td>{t.vendor}</td>
              <td>{t.amount}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
