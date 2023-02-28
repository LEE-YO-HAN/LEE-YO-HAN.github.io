import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Frontmatter } from "@/types/client/react";
import { StaticProps } from "@/types/client/react";

interface ChildProps {
  frontmatter: Frontmatter;
  content: any;
}

export default function ReactPostPage({ frontmatter, content }: ChildProps) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <span>{frontmatter.category}</span>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blog"));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: StaticProps;
}

export async function getStaticProps({ params: { slug } }: GetStaticProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blog", slug + ".md"),
    "utf-8",
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
