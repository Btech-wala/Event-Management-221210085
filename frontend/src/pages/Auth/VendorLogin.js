import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";

const VendorLogin = () => {
  const [vendorId, setVendorId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Vendor login", { vendorId, password });
    navigate("/vendor/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3 text-primary">Event Management System</h3>
        <h5 className="text-center">Vendor Login</h5>
        <form onSubmit={handleLogin}>
          <Input label="Vendor ID" value={vendorId} onChange={(e) => setVendorId(e.target.value)} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center mt-3">
            <Button text="Login" type="submit" />
            <Button
              text="Cancel"
              variant="secondary"
              onClick={() => {
                setVendorId("");
                setPassword("");
              }}
            />
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="mt-3 text-center">
          Not registered?{" "}
          <span
            className="text-primary fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default VendorLogin;
