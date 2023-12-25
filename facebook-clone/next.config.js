/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        hostname: "firebasestorage.googleapis.com"
      },
    ],
  },
};

module.exports = nextConfig
