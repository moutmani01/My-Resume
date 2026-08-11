/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Emits a minimal standalone server (.next/standalone) so the Docker
  // runtime image only needs the built output, not the full node_modules tree.
  output: "standalone",
  eslint: {
    dirs: ["app", "components", "content", "lib"],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
