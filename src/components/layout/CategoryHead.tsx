import Head from "next/head";
import { getPublicImage } from "@/util/getPublicImage";

interface Props {
  content: string;
  backgroundImage: string;
}

export const CategoryHead = ({ content, backgroundImage }: Props) => {
  return (
    <Head>
      <title>Rain Sugar BangBang Front-End</title>
      <meta name="description" content="developer's blog" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="subject" content={content} />
      <meta property="og:title" content="Rain Sugar BangBang" />
      <meta property="og:description" content="welcome to developer's blog" />
      <meta
        property="og:image"
        content={`${getPublicImage(`cards/${backgroundImage}`)}`}
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
