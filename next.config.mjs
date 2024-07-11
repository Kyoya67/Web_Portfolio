/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "nxpclab.github.io", "github.com"],
  },
};

// module.exports の代わりに export default を使用します
export default nextConfig;
