import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rain Suagr BangBang Front-End</title>
        <meta name="description" content="developer's blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rain Sugar BangBang" />
        <meta property="og:description" content="welcome to developer's blog" />
        <meta property="og:image" content={require("../images/GITHUB.png")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>블로그 ㅎㅇ</main>
    </>
  );
}
