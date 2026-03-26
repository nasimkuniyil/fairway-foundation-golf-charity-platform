import Button from "@/components/ui/Button";
import CustomLink from "@/components/ui/CustomLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuthStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!fullName || !email || !password) {
      toast.error("Please fill all the fields");
      setLoading(false);
      return;
    }

    await signUp(fullName, email, password);

    setLoading(false);
    navigate("/home");
  };
  return (
    <section className="w-full">
      <div className="w-full flex items-center justify-center max-w-5xl mx-auto gap-10 px-4 py-10 my-auto">
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
            <form onSubmit={handleSignup}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-full bg-slate-100 focus:outline-none focus:ring-1 focus:ring-brand-orange-light"
                    placeholder="John Doe"
                    autoFocus
                  />
                </div>
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
                    Create account
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-center">
                Already have an account?{" "}
                <CustomLink
                  to="/login"
                  className="text-brand-orange-dark hover:underline"
                >
                  Login
                </CustomLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
