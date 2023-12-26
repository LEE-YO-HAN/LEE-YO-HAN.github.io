import { GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { PostGrid } from "@/components/post/PostGrid";
import { MarkDownProps } from "@/types/pages";
import { CategoryHead } from "@/components/layout/CategoryHead";

export default function SimpleMemo({ posts }: { posts: MarkDownProps[] }) {
  return (
    <>
      <CategoryHead content="github" backgroundImage="GITHUB" />
      <PostGrid posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: MarkDownProps[];
}> = async () => {
  const dirPath = join(process.cwd() + "/src" + "/posting", "github");
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
