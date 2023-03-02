import Head from "next/head";
import { GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { PostGrid } from "@/components/post/PostGrid";
import { MarkDownProps } from "@/types/pages";

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>Rain Sugar BangBang Front-End</title>
        <meta name="description" content="developer's blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rain Sugar BangBang" />
        <meta property="og:description" content="welcome to developer's blog" />
        <meta property="og:image" content={require("../images/GITHUB.png")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main>블로그 ㅎㅇ</main> */}
      <p style={{ fontWeight: "bold" }}>전체 글 ({posts.length})</p>
      <PostGrid posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: MarkDownProps[];
}> = async () => {
  const dirPath = join(process.cwd(), "posting");
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
    if (stats.isDirectory()) {
      mdFiles.push(...(await getMdFiles(filePath)));
    } else if (stats.isFile() && file.endsWith(".md")) {
      mdFiles.push(filePath);
    }
  }
  return mdFiles;
}
