import { Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <Link
            to="/"
            className="text-xl font-sans font-bold text-brand-800 tracking-tight"
          >
            Fairway<span className="text-brand-orange-dark">Foundation</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
