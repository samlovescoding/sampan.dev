import Blog from "components/home/blog";
import Clients from "components/home/clients";
import Header from "components/home/header";
import Projects from "components/home/projects";
import SEO from "components/seo";

export default function Home() {
  return (
    <>
      <SEO
        title="Sampan Verma"
        description="Sampan Verma works as Senior Software Developer and has worked for clients like Proctor and Gambel, Tapestry - Coach and Litmus7."
      />
      <Header />
      {/* <Blog /> */}
      <Projects />
      <Clients />
    </>
  );
}
