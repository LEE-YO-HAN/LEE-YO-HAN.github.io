import Head from "next/head";
import { GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { PostGrid } from "@/components/post/PostGrid";
import { MarkDownProps } from "@/types/pages";

export default function SimpleMemo({ posts }: { posts: MarkDownProps[] }) {
  return (
    <>
      <Head>
        <title>Rain Sugar BangBang Front-End</title>
        <meta name="description" content="developer's blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rain Sugar BangBang" />
        <meta property="og:description" content="welcome to developer's blog" />
        <meta property="og:image" content={require("../../images/REACT.png")} />
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
      <PostGrid posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: MarkDownProps[];
}> = async () => {
  const dirPath = join(process.cwd() + "/posting", "react");
  const mdFiles = await getMdFiles(dirPath);
  const posts: MarkDownProps[] = [];
  for (const filePath of mdFiles) {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);
    posts.push({
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      content,
    });
  }
  return {
    props: {
      posts,
    },
  };
};

async function getMdFiles(dirPath: string): Promise<string[]> {
  const mdFiles: string[] = [];
  const files = await fs.readdir(dirPath);
  for (const file of files) {
    const filePath = join(dirPath, file);
    const stats = await fs.stat(filePath);
    if (stats.isFile() && file.endsWith(".md")) {
      mdFiles.push(filePath);
    }
  }
  return mdFiles;
}
