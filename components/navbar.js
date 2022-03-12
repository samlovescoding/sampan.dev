import { useEffect, useRef } from "react";
import CustomLink from "components/custom-link";
import { useRouter } from "next/router";

export default function Navbar() {
  const navbarRef = useRef();
  const router = useRouter();
  const isHomePage = router.asPath.split("#")[0] == "/";

  useEffect(() => {
    calculateIsScroll();
    window.addEventListener("scroll", calculateIsScroll);

    return () => {
      window.removeEventListener("scroll", calculateIsScroll);
    };
  }, []);

  function calculateIsScroll() {
    if (!isHomePage) {
      navbarRef.current.classList.add("navbar-scrolled");
    } else {
      if (window.scrollY > 20) {
        navbarRef.current.classList.add("navbar-scrolled");
      } else {
        navbarRef.current.classList.remove("navbar-scrolled");
      }
    }
  }

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="container">
        <h1 className="navbar-title">
          <CustomLink href="/">Sampan Verma</CustomLink>
        </h1>
        <div></div>
        <div className="navbar-links">
          <div className="navbar-link">
            <CustomLink href="/articles">Blog</CustomLink>
          </div>
          <div className="navbar-link">
            <CustomLink href="/reviews">Reviews</CustomLink>
          </div>
          {/* <div className="navbar-link">
            <CustomLink href="/tutorials">Tutorials</CustomLink>
          </div> */}
          <div className="navbar-link">
            <CustomLink href="/articles/uses">Uses</CustomLink>
          </div>
          {/* <div className="navbar-link">
            <CustomLink href="/articles/lab">Lab</CustomLink>
          </div> */}
          <div
            className="navbar-link"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
            style={{ cursor: "pointer" }}
          >
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
}
