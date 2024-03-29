const path = require("path");
const { withContentlayer } = require("next-contentlayer");
const { redirects } = require("./contents/redirects.json");

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
  async redirects() {
    return redirects.map((redirect) => ({
      source: `/entry/${encodeURI(redirect.from).replace(/\+/g, "%2B")}`,
      destination: `/entry/${encodeURI(redirect.to)}`,
      permanent: true,
    }));
  },
});
