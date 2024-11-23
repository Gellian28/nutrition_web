import { create } from "zustand";

type UserStore = {
  refresh_token: string;
  setRefreshToken: (token: string) => void,
  removeRefreshToken: () => void,
}

export const useUserStore = create<UserStore>((set) => ({
  refresh_token: "",
  setRefreshToken: (token: string) => set(() => ({ refresh_token: token })),
  removeRefreshToken: () => set(() => ({ refresh_token: "" })),
}));