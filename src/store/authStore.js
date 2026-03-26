// src/store/authStore.js
import { create } from "zustand";
import supabase from "@/lib/supabaseClient";
import { toast } from "sonner";

export const useAuthStore = create((set, get) => ({
  user: null,
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
      // Fetch profile (for is_admin)
      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", userId)
        .single();

      // Fetch active subscription
      const { data: sub } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", userId)
        .eq("status", "active")
        .single();

      // Fetch charity preference
      const { data: charityPref } = await supabase
        .from("user_charity_preferences")
        .select("charity_id, contribution_percent")
        .eq("user_id", userId)
        .single();

      set({
        isAdmin: profile?.is_admin || false,
        subscription: sub || null,
        selectedCharity: charityPref?.charity_id || null,
        charityPercent: charityPref?.contribution_percent || 10,
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

      toast.success("Account created! Please check your email to confirm.");
    } catch (error) {
      console.error("Signup error:", error.message);
      toast.error(error.message);
      set({ loading: false });
    }
  },

  signOut: async () => {
    try {
      await supabase.auth.signOut();
      set({
        user: null,
        session: null,
        isAdmin: false,
        subscription: null,
        selectedCharity: null,
      });
      toast.success("Signed out successfully.");
    } catch (error) {
      toast.error("Error signing out.");
    }
  },

  // Helper to refresh data manually if needed
  refreshUserData: () => get().fetchUserData(),
}));
