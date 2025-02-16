import React from "react";

const Button = ({ label = "Check emails", onClick }) => {
  return (
    <button className="btn btn-primary btn-lg" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
