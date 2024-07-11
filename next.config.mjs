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
};

export default nextConfig;
