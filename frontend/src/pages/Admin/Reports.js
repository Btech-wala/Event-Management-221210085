import React, { useEffect, useState } from "react";

const Reports = () => {
  const [summary, setSummary] = useState({ users: 0, vendors: 0, transactions: 0, revenue: 0 });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];
    const transactions = [
      { amount: 3500 },
      { amount: 5000 },
      { amount: 1200 },
    ];

    const totalRevenue = transactions.reduce((acc, t) => acc + t.amount, 0);
    setSummary({
      users: users.length,
      vendors: vendors.length,
      transactions: transactions.length,
      revenue: totalRevenue,
    });
  }, []);

  return (
    <div>
      <h4 className="mb-3 text-primary">Reports Summary</h4>

      <div className="row">
        <div className="col-md-3">
          <div className="card text-center p-3 bg-light shadow-sm">
            <h5>Total Users</h5>
            <h4>{summary.users}</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3 bg-light shadow-sm">
            <h5>Total Vendors</h5>
            <h4>{summary.vendors}</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3 bg-light shadow-sm">
            <h5>Transactions</h5>
            <h4>{summary.transactions}</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3 bg-light shadow-sm">
            <h5>Total Revenue (₹)</h5>
            <h4>{summary.revenue}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
