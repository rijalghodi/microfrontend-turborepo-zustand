const NextFederationPlugin = require("@module-federation/nextjs-mf");

const CHILD_URL = process.env.CHILD_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        remotes: {
          child: `child@${CHILD_URL}/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
