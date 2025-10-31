import React, { useState } from "react";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";

const RequestItem = () => {
  const [req, setReq] = useState({ itemName: "", reason: "" });
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("vendorRequests")) || []
  );

  const handleChange = (e) => {
    setReq({ ...req, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...requests, { ...req, id: Date.now(), status: "Pending" }];
    setRequests(updated);
    localStorage.setItem("vendorRequests", JSON.stringify(updated));
    setReq({ itemName: "", reason: "" });
    alert("Request submitted!");
  };

  return (
    <div>
      <h4 className="mb-3 text-success">Request New Item</h4>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <Input
          label="Item Name"
          name="itemName"
          value={req.itemName}
          onChange={handleChange}
        />
        <Input
          label="Reason / Justification"
          name="reason"
          value={req.reason}
          onChange={handleChange}
        />
        <Button text="Submit Request" type="submit" />
      </form>
    </div>
  );
};

export default RequestItem;
