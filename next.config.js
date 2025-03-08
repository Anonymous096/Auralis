/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to polyfill these modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        worker_threads: false,
      };
    }
    return config;
  },
  transpilePackages: ["inngest"],
};

module.exports = nextConfig;
