import CustomLink from "components/custom-link";
import fs from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";

function Review({ ...frontmatter }) {
  return (
    <div className="col-md-3 post-wrapper">
      <CustomLink href={`/reviews/${frontmatter.file}`}>
        <article className="post">
          <img className="post-image" src={frontmatter.cover} />
          <h3 className="post-title">{frontmatter.title}</h3>
        </article>
      </CustomLink>
    </div>
  );
}

export default function ReviewsPage({ reviews }) {
  return (
    <>
      <div className="navbar-compensator"></div>
      <div className="container blog">
        <h1 className="section-title">Find My Reviews</h1>

        <div className="row">
          {reviews.map((review, index) => (
            <Review {...review} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const reviews = await Promise.all(
    (
      await fs.readdir("data/reviews/")
    ).map(async (file) => {
      const source = await fs.readFile(`data/reviews/${file}`);
      const mdxSource = await serialize(source, { parseFrontmatter: true });
      const frontmatter = mdxSource.frontmatter;
      return { ...frontmatter, file: file.replace(".mdx", "") };
    })
  );
  return {
    props: {
      reviews: reviews.filter((review) => {
        return !review.hidden;
      }),
    },
  };
}
