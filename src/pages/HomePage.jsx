import { useEffect, useState } from "react";
import { toast } from "sonner";
import supabase from "@/lib/supabaseClient";
import { useAuthStore } from "@/store/authStore";
import HomePageHeader from "@/components/HomePageHeader";

function HomePage() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();

  useEffect(() => {
    // Adding a slight delay or depending on user state ensures the session is completely solid
    if (user?.id) {
      getProfiles();
    }
  }, [user]);

  async function getProfiles() {
    setLoading(true);
    const { data, error } = await supabase.from("profiles").select("*");

    if (error) {
      console.log("error :", error);
      toast.error(error.message);
      setLoading(false);
      return;
    }

    setProfiles(data || []);
    setLoading(false);
    console.log("hey :", data);
  }

  return (
    <>
      {/* We can temporarily use the landing page header just to give it a layout! */}
      <HomePageHeader />
      <div className="pt-24 min-h-screen bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold mb-6 text-slate-800">
            Welcome back to the Fairway Foundation!
          </h1>
          <h2 className="text-xl text-slate-500 mb-4">
            Your User ID: {user?.id}
          </h2>

          {loading ? (
            <p>Loading your data...</p>
          ) : profiles.length === 0 ? (
            <p className="text-red-500 bg-red-50 p-4 rounded-lg">
              No profiles found! (Check your RLS Policies in Supabase)
            </p>
          ) : (
            <ul className="space-y-3">
              {profiles.map((profile) => (
                <li key={profile.id} className="p-4 bg-slate-100 rounded-lg">
                  <span className="font-bold">{profile?.full_name}</span> -{" "}
                  {profile.role || "Member"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
