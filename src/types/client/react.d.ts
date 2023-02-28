// Frontmatter
export type Frontmatter = {
  title: string;
  date: string;
  category: string;
};

// getStaticProps
export type StaticProps = {
  slug: string | number;
};
