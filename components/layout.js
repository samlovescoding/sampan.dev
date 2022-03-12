import Navbar from "components/navbar";
import Footer from "components/footer";
import { useRouter } from "next/router";

export default function Layout({ children, compensateNavbarHeight = true }) {
  const router = useRouter();
  const isHomePage = router.asPath == "/";

  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
