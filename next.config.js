/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/uses",
        destination: "/articles/uses",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
