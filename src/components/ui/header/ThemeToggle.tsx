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
      <div className="dropdown dropdown-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-square flex items-center text-lg capitalize shadow-md"
        >
          <span>
            {themeOptions.map((opt) => theme === opt.value && opt.icon)}
          </span>
        </div>

        <ul
          tabIndex={-1}
          className="dropdown-content bg-base-300 rounded-box z-1 w-32 p-2 shadow-2xl mt-2"
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
