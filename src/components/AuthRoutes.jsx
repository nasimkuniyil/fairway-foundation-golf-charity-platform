// src/components/AuthRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function AuthRoute({ children }) {
  const { user, loading } = useAuthStore();

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-emerald-700 text-xl font-medium">
          Preparing your impact journey...
        </div>
      </div>
    );
  }

  // If user is already logged in → redirect to dashboard
  if (user) {
    return <Navigate to="/home" replace />;
  }

  // Otherwise show login/signup page
  return children;
}
