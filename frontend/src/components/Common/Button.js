import React from "react";

const Button = ({ text, onClick, variant = "primary", type = "button" }) => (
  <button
    type={type}
    className={`btn btn-${variant} px-4 rounded-3 fw-semibold`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
