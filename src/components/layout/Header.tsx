import { GithubButton } from "../ui/header/GithubButton";
import { ThemeToggle } from "../ui/header/ThemeToggle";

export function Header() {
  return (
    <>
      <header className="p-4 border-b border-base-300 shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <ThemeToggle></ThemeToggle>
          <GithubButton></GithubButton>
        </div>
      </header>
    </>
  );
}
