// Type for theme
export type Theme = "system" | "light" | "dark";

export type ThemeStore = {
  theme: Theme;
  setTheme: (selectedTheme: Theme) => void;
};
