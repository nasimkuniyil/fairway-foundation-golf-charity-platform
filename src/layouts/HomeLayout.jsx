import { Outlet } from "react-router-dom";
import HomePageHeader from "@/components/HomePageHeader";
import Footer from "@/components/Footer";

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomePageHeader />
      <main className="grow mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
