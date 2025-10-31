import React, { useEffect, useState } from "react";
import Button from "../../components/Common/Button";

const VendorsList = () => {
  const [vendors, setVendors] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("userCart")) || []
  );

  useEffect(() => {
    // simulate vendor data (later: fetch from backend)
    const sample = [
      { id: 1, name: "Dream Decor", category: "Decoration", price: 2000 },
      { id: 2, name: "Tasty Treats", category: "Catering", price: 3500 },
      { id: 3, name: "Bright Lights Co.", category: "Lighting", price: 1800 },
    ];
    setVendors(sample);
  }, []);

  const addToCart = (v) => {
    const updated = [...cart, v];
    setCart(updated);
    localStorage.setItem("userCart", JSON.stringify(updated));
    alert(`${v.name} added to cart`);
  };

  return (
    <div>
      <h4 className="mb-3 text-info">Available Vendors</h4>
      <div className="row">
        {vendors.map((v) => (
          <div key={v.id} className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <h5>{v.name}</h5>
              <p className="text-muted mb-1">Category: {v.category}</p>
              <p>₹ {v.price}</p>
              <Button text="Add to Cart" onClick={() => addToCart(v)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorsList;
