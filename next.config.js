/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

module.exports = nextConfig;
