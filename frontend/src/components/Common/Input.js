import React from "react";

const Input = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="mb-3 text-start">
    {label && <label className="form-label fw-bold">{label}</label>}
    <input
      name={name}
      type={type}
      className="form-control rounded-3 shadow-sm"
      value={value || ""}
      placeholder={placeholder || ""}
      onChange={onChange}
      autoComplete="off"
      required
    />
  </div>
);

export default Input;
