import { Link } from 'react-router-dom';

export default function CustomLink({ href, children, className = "", ...props }) {
  return (
    <Link 
      to={href} 
      className={`items-center transition-all ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}