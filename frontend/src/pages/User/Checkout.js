import React, { useState, useEffect } from "react";
import Button from "../../components/Common/Button";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState("UPI");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("userCart")) || []);
  }, []);

  const handleConfirm = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    const orders = JSON.parse(localStorage.getItem("userOrders")) || [];
    const newOrders = [
      ...orders,
      {
        id: Date.now(),
        items: cart,
        payment,
        date: new Date().toLocaleDateString(),
        status: "Confirmed",
      },
    ];
    localStorage.setItem("userOrders", JSON.stringify(newOrders));
    localStorage.removeItem("userCart");
    alert("Order placed successfully!");
    window.location.href = "/user/dashboard/order-status";
  };

  const total = cart.reduce((acc, c) => acc + c.price, 0);

  return (
    <div style={{ maxWidth: "500px" }}>
      <h4 className="mb-3 text-info">Checkout</h4>
      <p>Total Amount: ₹ {total}</p>

      <div className="mb-3">
        <label className="form-label fw-bold">Select Payment Mode</label>
        <select
          className="form-select"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option>UPI</option>
          <option>Cash</option>
          <option>Credit Card</option>
        </select>
      </div>

      <Button text="Confirm Order" onClick={handleConfirm} />
    </div>
  );
};

export default Checkout;
