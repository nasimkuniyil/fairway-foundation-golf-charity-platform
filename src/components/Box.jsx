import React from "react";

function Box({ children, className = "bg-white border border-slate-100" }) {
  return (
    <div
      className={`w-full p-8 rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
