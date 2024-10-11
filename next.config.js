/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
    formats: ["image/webp"],
    deviceSizes: [414, 768, 996, 1024, 1280, 1440],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
};

module.exports = nextConfig;
