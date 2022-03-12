import Blog from "components/home/blog";
import Clients from "components/home/clients";
import Header from "components/home/header";
import Projects from "components/home/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Blog />
      <Projects />
      <Clients />
    </>
  );
}
