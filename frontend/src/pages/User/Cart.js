import React, { useEffect, useState } from "react";
import Button from "../../components/Common/Button";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("userCart")) || []);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter((c) => c.id !== id);
    setCart(updated);
    localStorage.setItem("userCart", JSON.stringify(updated));
  };

  const total = cart.reduce((acc, c) => acc + c.price, 0);

  return (
    <div>
      <h4 className="mb-3 text-info">Your Cart</h4>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.category}</td>
                  <td>{c.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(c.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5>Total Amount: ₹ {total}</h5>
          <Button text="Proceed to Checkout" onClick={() => (window.location.href = "/user/dashboard/checkout")} />
        </>
      )}
    </div>
  );
};

export default Cart;
