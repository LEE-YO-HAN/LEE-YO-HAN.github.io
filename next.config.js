/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_GITHUN_API_TOKEN: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
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
