const path = require("path");
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  reactStrictMode: true,
  images: {
    domains: ["assets.natsuneko.blog"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "contentlayer/generated": path.join(__dirname, ".contentlayer/generated"),
    };

    return config;
  },
});
