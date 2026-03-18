import { IoLogoGithub } from "react-icons/io";

export function GithubButton() {
  return (
    <>
      <a
        href="https://github.com/21Chillie/unsplash-api-frontend"
        target="_blank"
        className="btn btn-neutral flex items-center gap-2 px-4 py-2 text-xl"
      >
        <span>
          <IoLogoGithub />
        </span>
        Github
      </a>
    </>
  );
}
