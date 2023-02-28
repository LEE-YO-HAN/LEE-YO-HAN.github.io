import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("react"));

  const paths = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join("react", filename),
      "utf-8",
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
