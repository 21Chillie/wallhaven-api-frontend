import { GithubButton } from "../ui/header/GithubButton";
import { ThemeToggle } from "../ui/header/ThemeToggle";

export function Header() {
  return (
    <>
      <header className="border-base-300 border-b p-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold italic">Wallpaper Search</h1>
            <p className="sr-only">
              Search and browse high-resolution wallpapers from Wallhaven.
            </p>
          </div>

          <div className="flex gap-3">
            <GithubButton></GithubButton>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </header>
    </>
  );
}
