import type { ReactNode } from "react";
import { UseThemeContext } from "../../../hooks/themeContext.hooks";
import type { ThemeType } from "../../../types/themeContext.type";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { PiMonitorFill } from "react-icons/pi";

export function ThemeToggle() {
  const { theme, setTheme } = UseThemeContext();

  const themeOptions: { label: string; value: ThemeType; icon: ReactNode }[] = [
    { label: "System", value: "system", icon: <PiMonitorFill></PiMonitorFill> },
    {
      label: "Dark",
      value: "dark",
      icon: <IoMdMoon></IoMdMoon>,
    },
    {
      label: "Light",
      value: "light",
      icon: <IoMdSunny></IoMdSunny>,
    },
  ];

  return (
    <>
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          type="button"
          aria-label="button toggle theme"
          className="btn btn-square border-base-content/10 bg-base-100 flex items-center border text-lg capitalize"
        >
          <span>
            {themeOptions.map(
              (opt) =>
                theme === opt.value && <span key={opt.value}>{opt.icon}</span>,
            )}
          </span>
        </button>

        <ul
          tabIndex={-1}
          className="dropdown-content bg-base-100 rounded-box border-base-content/10 z-1 mt-2 w-32 border p-2 shadow-md"
        >
          {themeOptions.map((opt) => {
            const { label, value } = opt;

            return (
              <li key={value}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="btn btn-sm btn-block btn-ghost w-full justify-start font-medium"
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
