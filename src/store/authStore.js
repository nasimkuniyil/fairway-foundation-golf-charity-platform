// src/store/authStore.js
import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";

export const useAuthStore = create((set) => ({
  user: null,
  session: null,
  loading: true,

  setSession: (session) =>
    set({ session, user: session?.user ?? null, loading: false }),

  fetchUserProfile: async () => {},

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null, subscription: null });
  },
}));
