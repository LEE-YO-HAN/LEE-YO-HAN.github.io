/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_GITHUB_API_TOKEN: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
  },
};

module.exports = nextConfig;
