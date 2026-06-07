import useScrollTop from "@hooks/useScrollTop";
import { ChevronUp } from "lucide-react";
import { Activity, useEffect } from "react";

export default function ButtonScrollTop() {
  const { isVisible, toggleVisibility, scrollToTop } = useScrollTop();

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  return (
    <Activity mode={isVisible ? "visible" : "hidden"}>
      <button
        className="btn btn-neutral text-neutral-content btn-circle lg:right-6 fixed right-2 bottom-6 z-10 animate-bounce shadow-md"
        type="button"
        onClick={scrollToTop}>
        <span className="text-xl">
          <ChevronUp />
        </span>
      </button>
    </Activity>
  );
}
