/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["opengraph.githubassets.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
