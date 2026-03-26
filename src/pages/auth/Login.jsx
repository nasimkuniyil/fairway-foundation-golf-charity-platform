import Button from "@/components/ui/Button";
import CustomLink from "@/components/ui/CustomLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(false);
  };

  return (
    <section>
      <div className="h-screen flex items-center justify-center max-w-5xl mx-auto gap-10 px-4">
        <div className="hidden md:block flex-1">
          <div className="max-w-3/4">
            <h1 className="text-5xl font-black mb-5">
              Start Your <br />{" "}
              <span className="text-brand-orange-dark">Journey</span>
            </h1>
            <p className="text-slate-500">
              Join a community that plays for a purpose. Win prizes, change
              lives, and track your impact on the course.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full bg-white p-4 md:p-8 rounded-2xl shadow-md">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
              <p className="text-slate-500 mb-5">
                Login to track your impact and your game.
              </p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-full bg-slate-100 focus:outline-none focus:ring-1 focus:ring-brand-orange-light"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-full bg-slate-100 focus:outline-none focus:ring-1 focus:ring-brand-orange-light"
                    placeholder="•••••••"
                  />
                </div>
                <div>
                  <Button
                    disabled={loading}
                    className="w-full bg-brand-orange-dark text-white hover:bg-brand-orange-light"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-center">
                Do n't have an account?{" "}
                <CustomLink
                  to="/signup"
                  className="text-brand-orange-dark hover:underline"
                >
                  Sign up
                </CustomLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
