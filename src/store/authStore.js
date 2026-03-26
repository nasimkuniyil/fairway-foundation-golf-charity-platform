// src/store/authStore.js
import { create } from "zustand";
import supabase from "@/lib/supabaseClient";
import { toast } from "sonner";

export const useAuthStore = create((set, get) => ({
  user: null,
  profile: null,
  session: null,
  loading: true,
  isAdmin: false,
  subscription: null,
  selectedCharity: null,
  charityPercent: 10,

  // Initialize auth
  initializeAuth: () => {
    // Check initial session
    get().checkSession();

    // Real-time auth listener
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      set({
        session,
        user: session?.user ?? null,
        loading: false,
      });

      if (session?.user) {
        await get().fetchUserData();
      } else {
        set({
          isAdmin: false,
          subscription: null,
          selectedCharity: null,
        });
      }
    });

    return () => authListener?.unsubscribe();
  },

  checkSession: async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;

      set({
        session,
        user: session?.user ?? null,
        loading: false,
      });

      if (session?.user) {
        await get().fetchUserData();
      }
    } catch (error) {
      console.error("Error checking session:", error.message);
      set({ session: null, user: null, loading: false });
    }
  },

  fetchUserData: async () => {
    const userId = get().user?.id;
    if (!userId) return;

    try {
      console.log("Fetching user data for user:", userId);

      // Fetch user
      const { data: userProfile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      set({
        profile: userProfile || null,
      });
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  },

  login: async (email, password) => {
    try {
      set({ loading: true });
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // setSession will be handled by onAuthStateChange
      toast.success("Welcome back! Let's make an impact today.");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message);
      set({ loading: false });
    }
  },

  signUp: async (fullName, email, password) => {
    try {
      set({ loading: true });

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
        },
      });

      if (error) throw error;

      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        full_name: fullName,
        role: "subscriber",
      });

      if (profileError) throw profileError;

      toast.success("Account created!");
    } catch (error) {
      console.error("Signup error:", error.message);
      toast.error(error.message);
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await supabase.auth.signOut();
      set({
        user: null,
        session: null,
        isAdmin: false,
        subscription: null,
        selectedCharity: null,
      });
      toast.success("Logged out successfully.");
    } catch (error) {
      toast.error("Error logging out.");
    }
  },

  // Helper to refresh data manually if needed
  refreshUserData: () => get().fetchUserData(),
}));
