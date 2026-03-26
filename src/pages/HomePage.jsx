import { useEffect, useState } from "react";
import { toast } from "sonner";
import supabase from "@/lib/supabaseClient";

function HomePage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  async function getProfiles() {
    const { data, error } = await supabase.from("profiles").select("*");

    if (error) {
      console.log("error :", error);
      toast.error(error.message);
      return;
    }

    setProfiles(data);
    console.log("hey :", data);
  }

  return (
    <ul>
      {profiles?.map((profile) => (
        <li key={profile.id}>
          {profile?.full_name} - {profile.role}
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
