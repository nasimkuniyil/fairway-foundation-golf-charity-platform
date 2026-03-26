export default function Button({ children, onClick, className, disabled, type = "submit", ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`cursor-pointer px-6 py-3 rounded-full shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
