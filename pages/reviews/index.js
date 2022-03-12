import CustomLink from "components/custom-link";

function Review() {
  return (
    <div className="col-md-3 post-wrapper">
      <CustomLink href="/reviews/top-graphic-novel">
        <article className="post">
          <img className="post-image" src="/images/articles/covers/test-2.jpg" />
          <h3 className="post-title">The Last of Us Part II</h3>
        </article>
      </CustomLink>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <div className="navbar-compensator"></div>
      <div className="container blog">
        <h1 className="section-title">My Reviews</h1>

        <div className="row">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
}
