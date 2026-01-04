/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/me",
  assetPrefix: "/me",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
