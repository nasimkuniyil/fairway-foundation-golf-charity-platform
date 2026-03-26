import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage/LandingPage";
import LoginPage from "./pages/auth/Login";
import { Toaster } from "sonner";
import SignupPage from "./pages/auth/Singup";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
