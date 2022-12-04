/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
