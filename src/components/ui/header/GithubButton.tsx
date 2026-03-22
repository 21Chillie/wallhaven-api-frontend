import { IoLogoGithub } from "react-icons/io";

export function GithubButton() {
  return (
    <>
      <a
        href="https://github.com/21Chillie/unsplash-api-frontend"
        target="_blank"
        className="btn btn-neutral max-sm:btn-square flex items-center gap-2 px-4 py-2 text-xl"
      >
        <span>
          <IoLogoGithub />
        </span>
        <p className="hidden sm:block">Github</p>
      </a>
    </>
  );
}
