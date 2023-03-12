/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_GITHUB_API_TOKEN: process.env.NEXT_GITHUB_API_TOKEN,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = nextConfig;
