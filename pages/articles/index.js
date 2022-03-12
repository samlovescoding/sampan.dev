import CustomLink from "components/custom-link";

function Article() {
  return (
    <div className="col-md-3 post-wrapper">
      <CustomLink href="/articles/top-graphic-novel">
        <article className="post">
          <img className="post-image" src="/images/articles/covers/test-1.jpg" />
          <h3 className="post-title">Top Graphic Novel Reads to Blow Your Mind</h3>
        </article>
      </CustomLink>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <div className="navbar-compensator"></div>
      <div className="container blog">
        <h1 className="section-title">Find My Articles</h1>

        <div className="row">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </>
  );
}
