import Head from "next/head";

interface Props {
  title: string;
  description: string;
  category: string;
}

export const NextHead = ({ title, description, category }: Props) => {
  return (
    <Head>
      <title>Rain Sugar BangBang Front-End</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={`${description}`} />
      <meta name="keywords" content={`${category}, ${title}`} />
      <meta httpEquiv="title" content={`${description}`} />
      <meta httpEquiv="subject" content={`${category}`} />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta
        property="og:image"
        content={`../images/${category.toUpperCase()}.png`}
      />
      <meta
        name="naver-site-verification"
        content="af9c8049662a7c6c85ea946e9eb561086e70062c"
      />
      <meta
        name="google-site-verification"
        content="Zgp7rA3RAdcRnhPPsGLK-t4KVTO86AejlDIQQIGpvLg"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146"
        crossOrigin="anonymous"
      ></script>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
