import { Outlet } from "react-router-dom";
import AuthHeader from "@/components/AuthHeader";
import AuthFooter from "@/components/AuthFooter";

export default function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthHeader />
      <main className="grow flex items-center justify-center">
        <Outlet />
      </main>
      <AuthFooter />
    </div>
  );
}
