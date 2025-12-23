import { create } from "zustand";

interface StatusState {
  status: "active" | "inactive" | "afk";
  changeStatus: (newStatus: "active" | "inactive" | "afk") => void;
}

export const useStatus = create<StatusState>((set) => ({
  status: "active",
  changeStatus: (newStatus) => set({ status: newStatus }),
}));
