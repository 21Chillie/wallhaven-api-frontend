import BtnToggleTheme from "@components/BtnToggleTheme";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Navbar() {
  return (
    <header className="bg-base-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4 max-xl:px-4">
        {/* Navbar Brand */}
        <div className="space-y-1">
          <a href="/">
            <h3 className="text-3xl font-bold tracking-tight uppercase">
              Wallpapers
            </h3>
          </a>
          <p className="text-base-content/70 text-sm leading-relaxed md:text-base">
            Find high-resolution wallpapers
          </p>
        </div>

        {/* Theme control and GitHub project link */}
        <div className="flex items-center gap-4">
          <a
            role="button"
            className="btn btn-square group"
            href="https://github.com/21Chillie/wallhaven-api-frontend"
            target="_blank"
            rel="noopener noreferrer">
            <SiGithub className="text-base-content/70 group-hover:text-base-content size-5 transition-colors" />
          </a>
          <BtnToggleTheme />
        </div>
      </nav>
    </header>
  );
}
