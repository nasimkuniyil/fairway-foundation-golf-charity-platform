import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage/LandingPage";
import LoginPage from "./pages/auth/Login";
import { Toaster } from "sonner";
import SignupPage from "./pages/auth/Singup";
import HomePage from "./pages/homePage.jsx/HomePage";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import AuthRoute from "./components/AuthRoutes";

function App() {
  const { initializeAuth } = useAuthStore();
  useEffect(() => {
    const cleanup = initializeAuth();
    return cleanup;
  }, []);
  return (
    <>
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignupPage />
              </AuthRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
