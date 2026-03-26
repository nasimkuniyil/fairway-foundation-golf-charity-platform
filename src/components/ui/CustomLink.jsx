import { Link } from "react-router-dom";

export default function CustomLink({ to, children, className = "", ...props }) {
  return (
    <Link to={to} className={`transition-all ${className}`} {...props}>
      {children}
    </Link>
  );
}
