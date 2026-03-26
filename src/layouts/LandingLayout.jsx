import { Outlet } from "react-router-dom";
import LandingPageHeader from "@/components/LandingPageHeader";
import Footer from "@/components/Footer";

export default function LandingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingPageHeader />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
