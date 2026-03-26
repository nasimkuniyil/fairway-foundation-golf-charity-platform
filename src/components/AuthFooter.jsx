export default function AuthFooter() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Fairway Foundation. All rights
        reserved.
      </div>
    </footer>
  );
}
