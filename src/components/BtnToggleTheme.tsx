import { useThemeStore } from "@store/useThemeStore";
import { Monitor, Moon, Sun } from "lucide-react";
import { useShallow } from "zustand/shallow";
import type { Theme } from "~/types/global.type";

const themeList: { name: Theme; icon: React.JSX.Element }[] = [
  {
    name: "system",
    icon: <Monitor className="size-5" />,
  },
  {
    name: "light",
    icon: <Sun className="size-5" />,
  },
  {
    name: "dark",
    icon: <Moon className="size-5" />,
  },
];

export default function BtnToggleTheme() {
  const { theme, setTheme } = useThemeStore(
    useShallow((s) => ({ theme: s.theme, setTheme: s.setTheme }))
  );

  const activeTheme = themeList.find((t) => t.name === theme);

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        type="button"
        className="btn btn-square group">
        <span className="text-base-content/80 group-hover:text-base-content transition-colors">
          {activeTheme?.icon}
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-300 rounded-box z-1 mt-1 w-36 border p-2 shadow-sm">
        {themeList.map(({ name }) => {
          const selectedTheme = name === theme;
          return (
            <li key={name}>
              <button
                type="button"
                className={`btn btn-block justify-start capitalize ${selectedTheme ? "btn-active" : "btn-ghost"}`}
                onClick={() => {
                  setTheme(name);
                  (document.activeElement as HTMLElement).blur();
                }}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
