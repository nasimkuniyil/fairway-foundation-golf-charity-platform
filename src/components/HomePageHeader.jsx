import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "@/components/ui/CustomLink";
import Button from "./ui/Button";
import { useAuthStore } from "@/store/authStore";

export default function HomePageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuthStore();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-sans font-bold text-brand-800 tracking-tight"
            >
              Fairway<span className="text-brand-orange-dark">Foundation</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={handleLogout}
              className="hidden lg:flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-brand-orange-dark tracking-wider hover:bg-brand-orange-light hover:shadow-lg transition-all duration-300"
            >
              Logout
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-slate-500 hover:text-brand-orange-dark p-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-200 ${
          isMobileMenuOpen
            ? "h-screen opacity-100"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <div className="pt-2">
            <Button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center w-full px-6 py-3.5 text-base font-bold rounded-full text-white bg-brand-orange-dark tracking-wider hover:bg-brand-orange-light shadow-md transition-all duration-300"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
