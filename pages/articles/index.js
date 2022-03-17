import CustomLink from "components/custom-link";
import SEO from "components/seo";
import fs from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";

function Article({ article }) {
  return (
    <div className="col-md-3 post-wrapper">
      <CustomLink href={`/articles/${article.file}`}>
        <article className="post">
          <img className="post-image" src={article.cover} />
          <h3 className="post-title">{article.title}</h3>
        </article>
      </CustomLink>
    </div>
  );
}

export default function BlogPage({ articles }) {
  return (
    <>
      <SEO
        title="Find My Articles"
        description="Take a look at all the content I have published over the past few years all in one place."
      />
      <div className="navbar-compensator"></div>
      <div className="container blog">
        <h1 className="section-title">Find My Articles</h1>

        <div className="row">
          {articles.map((article, index) => (
            <Article article={article} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = await fs.readdir("data/articles/");

  const articles = (
    await Promise.all(
      files.map(async (file) => {
        const source = await fs.readFile(`data/articles/${file}`);
        const mdxSource = await serialize(source, { parseFrontmatter: true });
        return { ...mdxSource.frontmatter, file: file.replace(".mdx", "") };
      })
    )
  )
    .filter((article) => !article.hidden)
    .sort((a, b) => {
      const aDate = new Date(a.createdDate);
      const bDate = new Date(b.createdDate);
      return bDate - aDate;
    });
  return { props: { articles } };
}
