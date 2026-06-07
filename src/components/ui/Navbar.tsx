import BtnToggleTheme from "@components/BtnToggleTheme";
import { BtnModalApiKey } from "@components/ModalApiKey";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Navbar() {
  return (
    <header className="bg-base-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-4 max-xl:px-4">
        {/* Navbar Brand */}
        <div className="space-y-1">
          <a href="/">
            <h3 className="text-xl font-bold tracking-tight uppercase sm:text-3xl">
              Wallpapers
            </h3>
          </a>
          <p className="text-base-content/70 text-[11px] leading-relaxed sm:text-base">
            Find high-resolution wallpapers
          </p>
        </div>

        {/* Theme control and GitHub project link */}
        <div className="flex items-center gap-4">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Documentation">
            <a
              role="button"
              className="btn btn-square group"
              href="https://github.com/21Chillie/wallhaven-api-frontend"
              target="_blank"
              rel="noopener noreferrer">
              <SiGithub className="text-base-content/70 group-hover:text-base-content size-5 transition-colors" />
            </a>
          </div>

          <div
            className="tooltip tooltip-bottom"
            data-tip="Set API key">
            <BtnModalApiKey />
          </div>

          <div
            className="tooltip tooltip-bottom"
            data-tip="Theme">
            <BtnToggleTheme />
          </div>
        </div>
      </nav>
    </header>
  );
}
