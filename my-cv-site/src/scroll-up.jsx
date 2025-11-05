import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import StarBorder from "./components/animations/StarBorder";


function ScrollToTopBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    setShowScrollBtn(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={showScrollBtn ? "btn-visible" : "btn-hidden"}
      onClick={() => scrollToTop()}
    >
      <StarBorder
        as="div"
        className="relative"
        color="DeepSkyBlue"
        speed="4s"
        thickness="3"
      >
        <FaArrowUp />
      </StarBorder>
    </button>
  );
}

export default ScrollToTopBtn;