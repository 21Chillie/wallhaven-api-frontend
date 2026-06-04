import { useThemeStore } from "@store/useThemeStore.ts";
import { useEffect, type ReactNode } from "react";
import type { Theme } from "~/types/global.type";

// Provider to handle DOM side effect of applying the theme
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    // Select html element to apply theme to
    const htmlEl = window.document.documentElement;

    // Apply theme based on variable `const theme` value
    const applyTheme = (currentTheme: Theme) => {
      // If theme is "system", use the system's preferred color scheme
      const selectedTheme =
        currentTheme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : currentTheme;

      // Remove existing data-theme attribute and set the new one
      htmlEl.removeAttribute("data-theme");
      htmlEl.setAttribute("data-theme", selectedTheme);
    };

    applyTheme(theme);

    // Automatically set theme when the user's system color scheme is changed and also when theme selected is `system`
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return <>{children}</>;
}
