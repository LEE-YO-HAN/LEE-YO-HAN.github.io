import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  date: string;
  content: string;
}

export default function BlogPost({ title, date, content }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = join(process.cwd() + "/posting", "nextjs");
  const filenames = await fs.readdir(postsDirectory);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = join(process.cwd() + "/posting", "nextjs", `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    props: {
      title: data.title,
      date: data.date,
      content,
    },
  };
};
