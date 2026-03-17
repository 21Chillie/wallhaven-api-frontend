import type { Theme, ThemeContextType } from "../types/globalTypes";
import { useContext, createContext, type ReactNode, useState } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

export function UseThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }

  return context;
}
