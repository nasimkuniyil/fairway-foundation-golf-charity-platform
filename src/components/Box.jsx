import React from "react";

function Box({ children, className = "bg-white border-slate-100" }) {
  return (
    <div className={`w-full p-8 rounded-2xl shadow-sm border ${className}`}>
      {children}
    </div>
  );
}

export default Box;
