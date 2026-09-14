/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export (./out) by default, for Cloudflare Pages. Set
  // BUILD_STANDALONE=1 to emit a standalone Node server (.next/standalone)
  // instead, for the Docker self-hosted deployment path.
  output: process.env.BUILD_STANDALONE === "1" ? "standalone" : "export",
  eslint: {
    dirs: ["app", "components", "content", "lib"],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
