import CustomLink from "components/custom-link";

export default function Blog() {
  return (
    <section className="blog blog-must-reads">
      <h1 className="section-title">My Must Read Picks</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CustomLink href="/articles/animating-react">
              <article className="post post-1">
                <img className="post-image" src="/images/articles/covers/test-1.jpg" />
                <h5 className="post-title">Animation with React</h5>
              </article>
            </CustomLink>
          </div>

          <div className="col-md-4">
            <CustomLink href="/articles/gaming-in-web3">
              <article className="post post-2">
                <img className="post-image" src="/images/articles/covers/test-2.jpg" />
                <h5 className="post-title">Gaming in Web 3.0</h5>
              </article>
            </CustomLink>
          </div>

          <div className="col-md-4">
            <CustomLink href="/articles/top-graphic-novels">
              <article className="post post-3">
                <img className="post-image" src="/images/articles/covers/test-3.jpg" />
                <h5 className="post-title">Top Graphic Novel Reads to Blow Your Mind</h5>
              </article>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
}
