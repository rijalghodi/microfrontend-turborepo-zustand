const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "child",
        filename: `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        exposes: {
          "./Counter": "./src/components/Counter.tsx",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
