import type { ThemeContextType, ThemeType } from "../types/themeContext.type";
import {
  useContext,
  createContext,
  type ReactNode,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem("theme") as ThemeType) || "system",
  );

  useEffect(() => {
    const htmlEl = window.document.documentElement;

    const applyTheme = (currentTheme: ThemeType) => {
      let selectedTheme = currentTheme;

      if (currentTheme === "system") {
        selectedTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      }

      htmlEl.removeAttribute("data-theme");
      htmlEl.setAttribute("data-theme", selectedTheme);
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function UseThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }

  return context;
}
