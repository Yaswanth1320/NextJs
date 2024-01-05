import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
  user: User | undefined
  setuser: (user: User | undefined ) => void;
}

export const useUser = create<UserState>()((set) => ({
  user: undefined,
  setuser: (user) => set(() => ({ user })),
}));
