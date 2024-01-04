import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { NextHead } from "@/components/post/NextHead";
import { PostTemplate } from "@/components/post/PostTemplate";
import { MarkDownProps } from "@/types/pages";

export default function Posts({
  title,
  description,
  category,
  keyword,
  date,
  content,
}: MarkDownProps) {
  return (
    <>
      <NextHead
        title={title}
        description={description}
        keyword={keyword}
        category={category}
      />
      <PostTemplate
        title={title}
        description={description}
        category={category}
        date={date}
        keyword={keyword}
        content={content}
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4077287316160146"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = join(process.cwd() + "/src" + "/posting");
  const filenames = await getMdFiles(postsDirectory);
  const paths = filenames.map(filename => ({
    params: {
      slug: filename.replace(/\.md$/, ""),
    },
  }));
  return { paths, fallback: false };
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
      mdFiles.push(file);
    }
  }
  return mdFiles;
}

export const getStaticProps: GetStaticProps<MarkDownProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const filePath = join(
    process.cwd() + "/src" + "/posting",
    `${slug.split("-")[0]}`,
    `${slug}.md`,
  );
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    props: {
      title: data.title,
      description: data.description,
      category: data.category,
      keyword: data.keyword,
      date: data.date,
      content,
    },
  };
};
