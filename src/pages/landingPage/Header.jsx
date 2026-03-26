import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "@/components/ui/CustomLink";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Our Mission", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Memberships", href: "#pricing" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

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

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-orange-dark text-slate-600 pb-1 border-b-2 border-transparent`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <CustomLink
              to="/login"
              className="hidden md:flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-brand-orange-dark tracking-wider hover:bg-brand-orange-light hover:shadow-lg transition-all duration-300"
            >
              Join the Club
            </CustomLink>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-500 hover:text-brand-orange-dark p-2 transition-colors"
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-200 ${
          isMobileMenuOpen
            ? "h-screen opacity-100"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all text-slate-600 hover:text-brand-orange-dark hover:bg-slate-50`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <CustomLink
              to="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-6 py-3.5 text-base font-bold rounded-full text-white bg-brand-orange-dark tracking-wider hover:bg-brand-orange-light shadow-md transition-all duration-300"
            >
              Join the Club
            </CustomLink>
          </div>
        </div>
      </div>
    </header>
  );
}
