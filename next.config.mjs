/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "nxpclab.github.io", "github.com"],
    unoptimized: true, // 画像最適化を無効にする
  },
  // output: "export",
};

export default nextConfig;
