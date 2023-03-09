/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = nextConfig;
