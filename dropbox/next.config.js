/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        protocol: 'http',
        hostname: "www.w3.org/2000/svg"
      },
    ],
  },
};

module.exports = nextConfig
