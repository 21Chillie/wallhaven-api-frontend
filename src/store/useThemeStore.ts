import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeStore } from "~/types/global.type";

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (selectedTheme) => set(() => ({ theme: selectedTheme })),
    }),
    { name: "theme-store" }
  )
);
