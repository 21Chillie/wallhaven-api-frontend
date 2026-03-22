import { FaArrowUp } from "react-icons/fa";

import useScrollTop from "../../../../hooks/scrollTop.hooks";
import { useEffect, Activity } from "react";

function ButtonScrollTop() {
  const { isVisible, toggleVisibility, scrollToTop } = useScrollTop();

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  return (
    <Activity mode={isVisible ? "visible" : "hidden"}>
      <button
        className="btn btn-neutral btn-circle fixed right-4 bottom-8 shadow-md animate-bounce"
        type="button"
        onClick={scrollToTop}
      >
        <span className="text-xl">
          <FaArrowUp></FaArrowUp>
        </span>
      </button>
    </Activity>
  );
}

export default ButtonScrollTop;
