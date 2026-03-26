import React from "react";

function Box({ children }) {
  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      {children}
    </div>
  );
}

export default Box;
