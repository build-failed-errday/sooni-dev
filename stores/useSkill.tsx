import { create } from "zustand";

interface SkillState {
  skill: string;
  changeSelected: (newSkill: string) => void;
}

export const useSkill = create<SkillState>((set) => ({
  skill: "",
  changeSelected: (newSkill) => set({ skill: newSkill }),
}));
