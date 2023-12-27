import { GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { PostGrid } from "@/components/post/PostGrid";
import { PostGridProps } from "@/types/pages";
import { CategoryHead } from "@/components/layout/CategoryHead";

export default function Nestjs({ posts }: { posts: PostGridProps[] }) {
  return (
    <>
      <CategoryHead content="nestjs" backgroundImage="NESTJS" />
      <PostGrid posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: PostGridProps[];
}> = async () => {
  const dirPath = join(process.cwd() + "/src" + "/posting", "nestjs");
  const mdFiles = await getMdFiles(dirPath);
  const posts: PostGridProps[] = [];
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
