import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({ title, description, image }) {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={router.asPath} />
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
}
