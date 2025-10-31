import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";

const UserLogin = () => {
  const [form, setForm] = useState({ userId: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User login", form);
    navigate("/user/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3 text-primary">Event Management System</h3>
        <h5 className="text-center">User Login</h5>

        <form onSubmit={handleLogin}>
          <Input
            label="User ID"
            name="userId"
            value={form.userId}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          <div className="text-center mt-3">
            <Button text="Login" type="submit" />
            <Button
              text="Cancel"
              variant="secondary"
              onClick={() => setForm({ userId: "", password: "" })}
            />
          </div>
        </form>

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

export default UserLogin;
