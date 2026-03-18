// Theme Context Types
export type ThemeType = "system" | "dark" | "light";

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};
