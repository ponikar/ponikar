/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "opengraph.githubassets.com",
      "res.cloudinary.com",
      "media.dev.to",
    ],
  },
};

module.exports = nextConfig;
