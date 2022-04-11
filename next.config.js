/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                name: "removeViewBox",
                active: false,
              },
            ],
          },
        },
      },
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/scss")],
  },
  images: {
    domains: ["cre8ivedge.net"],
  },
  experimental: { images: { layoutRaw: true } },
  assetPrefix: "./",
};

module.exports = nextConfig;
