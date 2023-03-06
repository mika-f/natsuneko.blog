const path = require("path");
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["assets.natsuneko.blog"],
  },
  webpack: (config) => {
    // suppress warnings of webpack ESM module resolver
    // ref: https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1279678289
    config.infrastructureLogging = { level: "error" };

    return config;
  },
});
