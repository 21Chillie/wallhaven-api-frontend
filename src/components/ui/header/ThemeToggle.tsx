import type { ReactNode } from "react";
import { UseThemeContext } from "../../../hooks/themeContext";
import type { ThemeType } from "../../../types/themeContext.type";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { PiMonitorFill } from "react-icons/pi";

export function ThemeToggle() {
  const { theme, setTheme } = UseThemeContext();

  const themeOptions: { label: string; value: ThemeType; icon: ReactNode }[] = [
    { label: "System", value: "system", icon: <PiMonitorFill></PiMonitorFill> },
    { label: "Dark", value: "dark", icon: <IoMdMoon></IoMdMoon> },
    { label: "Light", value: "light", icon: <IoMdSunny></IoMdSunny> },
  ];

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-square border-base-300 bg-base-100 flex items-center border text-lg capitalize shadow-md"
        >
          <span>
            {themeOptions.map((opt) => theme === opt.value && opt.icon)}
          </span>
        </div>

        <ul
          tabIndex={-1}
          className="dropdown-content bg-base-100 rounded-box border-base-300 z-1 mt-2 w-32 border p-2 shadow-md"
        >
          {themeOptions.map((opt) => {
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
