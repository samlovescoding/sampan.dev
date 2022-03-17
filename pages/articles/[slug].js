import Header from "components/article/header";
import SEO from "components/seo";
import fs from "fs/promises";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function ArticlePage({ article, compiledSource }) {
  return (
    <>
      <SEO title={article.title} description={article.seoDescription} />
      {article.noHeader !== true && (
        <Header title={article.title} subtitle={article.subtitle} backdrop={article.backdrop} />
      )}
      <div className="container">
        <div style={{ height: 100 }}></div>
        {article.noHeader === true && (
          <>
            <div style={{ height: 100 }}></div>
            <h1 className="section-title">{article.title}</h1>
          </>
        )}

        <article className="article-body">
          <MDXRemote compiledSource={compiledSource} />
        </article>
      </div>

      <div style={{ height: 300 }}></div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const source = await fs.readFile(`data/articles/${params.slug}.mdx`);
  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return { props: { article: mdxSource.frontmatter, compiledSource: mdxSource.compiledSource } };
}

export async function getStaticPaths() {
  const files = await fs.readdir("data/articles/");

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
