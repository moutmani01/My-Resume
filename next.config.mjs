/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["app", "components", "content", "lib"],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
