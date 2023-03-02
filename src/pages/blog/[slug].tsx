import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { NextHead } from "@/components/post/NextHead";
import { PostTemplate } from "@/components/post/PostTemplate";

interface Props {
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
}

export default function BlogPost({
  title,
  description,
  category,
  date,
  content,
}: Props) {
  return (
    <>
      <NextHead title={title} description={description} category={category} />
      <PostTemplate
        title={title}
        description={description}
        category={category}
        date={date}
        content={content}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = join(process.cwd() + "/posting", "blog");
  const filenames = await fs.readdir(postsDirectory);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = join(process.cwd() + "/posting", "blog", `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    props: {
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      content,
    },
  };
};
