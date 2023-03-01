import Head from "next/head";

interface Props {
  title: string;
  description: string;
  category: string;
}

export const NextHead = ({ title, description, category }: Props) => {
  return (
    <Head>
      <title>Rain Suagr BangBang Front-End</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={`${description}`} />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta
        property="og:image"
        content={`../images/${category.toUpperCase()}.png`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
