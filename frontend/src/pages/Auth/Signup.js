import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "vendor",
    category: "Catering",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // later this will send data to backend
    console.log("Signup form:", form);

    // Redirect based on selected role
    if (form.role === "admin") navigate("/admin/login");
    else if (form.role === "vendor") navigate("/vendor/login");
    else navigate("/"); // user login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "420px" }}>
        <h3 className="text-center mb-3 text-primary">Sign Up</h3>

        <form onSubmit={handleSubmit}>
          <Input label="Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Email" name="email" value={form.email} onChange={handleChange} />
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          {/* Role Selection */}
          <div className="mb-3 text-start">
            <label className="form-label fw-bold">Role</label>
            <select
              name="role"
              className="form-select rounded-3 shadow-sm"
              value={form.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Vendor category visible only if role = vendor */}
          {form.role === "vendor" && (
            <div className="mb-3 text-start">
              <label className="form-label fw-bold">Category</label>
              <select
                name="category"
                className="form-select rounded-3 shadow-sm"
                value={form.category}
                onChange={handleChange}
              >
                <option>Catering</option>
                <option>Florist</option>
                <option>Decoration</option>
                <option>Lighting</option>
              </select>
            </div>
          )}

          <div className="text-center mt-3">
            <Button text="Sign Up" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
