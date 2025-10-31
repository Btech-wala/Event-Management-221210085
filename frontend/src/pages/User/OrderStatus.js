import React, { useEffect, useState } from "react";

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("userOrders")) || []);
  }, []);

  return (
    <div>
      <h4 className="mb-3 text-info">Order Status</h4>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="card p-3 mb-3 shadow-sm">
            <h6>Order ID: {order.id}</h6>
            <p>Date: {order.date}</p>
            <p>Payment: {order.payment}</p>
            <p>
              Status:{" "}
              <span
                className={`badge bg-${
                  order.status === "Confirmed"
                    ? "success"
                    : order.status === "Pending"
                    ? "warning"
                    : "danger"
                }`}
              >
                {order.status}
              </span>
            </p>
            <ul className="list-group list-group-flush">
              {order.items.map((i) => (
                <li key={i.id} className="list-group-item">
                  {i.name} — ₹ {i.price}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderStatus;
