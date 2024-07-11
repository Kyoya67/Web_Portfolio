/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.microcms-assets.io",
      "raw.githubusercontent.com",
      "nxpclab.github.io",
      "github.com",
    ],
  },
  // Add the following output configuration
  output: {
    export: true,
  },
};

module.exports = nextConfig;
