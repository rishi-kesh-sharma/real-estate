module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/public",
  },
};
