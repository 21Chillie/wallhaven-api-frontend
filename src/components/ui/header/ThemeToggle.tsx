import { UseThemeContext } from "../../../hooks/themeContext";
import type { ThemeType } from "../../../types/globalTypes";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const THEME_OPTIONS: { label: string; value: ThemeType }[] = [
  { label: "System", value: "system" },
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
];

export function ThemeToggle() {
  const { theme, setTheme } = UseThemeContext();

  return (
    <>
      <div className="dropdown dropdown-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-square text-lg flex items-center capitalize shadow-md"
        >
          <span>
            {theme === "dark" ? <IoMdMoon></IoMdMoon> : <IoMdSunny></IoMdSunny>}
          </span>
        </div>

        <ul
          tabIndex={-1}
          className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
        >
          {THEME_OPTIONS.map((opt) => {
            const { label, value } = opt;

            return (
              <li key={value}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="btn btn-sm btn-block btn-ghost w-full justify-start"
                  aria-label={label}
                  value={value}
                  checked={theme === value}
                  onChange={() => setTheme(value)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
