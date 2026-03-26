import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage/LandingPage";
import LoginPage from "./pages/auth/Login";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
