import Header from "components/article/header";
import fs from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function ReviewPage({ compiledSource, frontmatter }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <Header title={frontmatter.title} subtitle={frontmatter.subtitle} backdrop={frontmatter.backdrop} />
      <div className="container">
        <section className="review">
          <div className="review-image-wrapper">
            <img className="review-image" src={frontmatter.cover} />
          </div>
          <div className="review-information-wrapper">
            <h1 className="review-title">{frontmatter.title}</h1>
            <p className="review-excerpt">{frontmatter.excerpt}</p>
            <div className="review-rating">
              <div className="review-rating-score">
                <span>{frontmatter.ratingScore}</span>
              </div>
              /{frontmatter.ratingMax}
            </div>
            <p className="review-excerpt">{frontmatter.ratingComment}</p>
          </div>
        </section>
        <div style={{ height: 100 }}></div>
        <article className="article-body">
          <MDXRemote compiledSource={compiledSource} frontmatter={frontmatter} />
        </article>
      </div>

      <div style={{ height: 300 }}></div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const filename = `data/reviews/${params.slug}.mdx`;
  const source = await fs.readFile(filename);
  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return { props: { frontmatter: mdxSource.frontmatter, compiledSource: mdxSource.compiledSource } };
}

export async function getStaticPaths() {
  const reviews = await fs.readdir("data/reviews/");

  const paths = reviews.map((review) => {
    return {
      params: {
        slug: review.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
